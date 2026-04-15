import { type WpPage } from "../get/defs.js";
import HtmlParser from "node-html-parser";

export function parseWordPressPage(page: WpPage) : string {
    if (!page.content) {
        throw new Error(`page: ${page.link} doesn't have content`);
    }

    console.log("parsing: ", page.link);

    const root = HtmlParser.parse(page.content.rendered);

    // find main content container (hero content + columns)
    const contentRoot = root; // fallback if structure changes

    // remove unwanted elements
    contentRoot.querySelectorAll([
        ".yoast-breadcrumbs",
        ".graphic-element-wrapper",
        "svg",
        "figure",
        ".hamk-post-modified"
    ].join(",")).forEach(el => el.remove());

    // extract only markdown-relevant nodes
    const allowedTags = ["h1","h2","h3","h4","h5","h6","p","ul","ol", "br"];

    const filteredNodes = contentRoot.querySelectorAll(allowedTags.join(","));
    const result = convertToHtml(filteredNodes);
    
    return result;
}

function convertToHtml(nodes: HtmlParser.HTMLElement[]): string {
    return nodes.map(node => serialize(node)).join("\n").trim();
}
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}
function serialize(node: HtmlParser.HTMLElement): string {
    const tag = node.tagName?.toLowerCase?.();

    // text node fallback
    if (!tag) {
        return escapeHtml(node.textContent ?? "");
    }

    const inner = () => node.childNodes?.map(serialize).join("") ?? "";

    switch (tag) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
        case "p":
            return `<${tag}>${inner()}</${tag}>`;

        case "a": {
            const href = node.getAttribute?.("href") ?? "";
            return `<a href="${href}">${inner()}</a>`;
        }

        case "ul":
        case "ol":
            return `<${tag}>${inner()}</${tag}>`;

        case "li":
            return `<li>${inner()}</li>`;
        case "br":
            return "<br>";

        default:
            return inner();
    }
}

