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
    let result = str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    result = result.replace(/https?:\/\/[^\s<>()]+(?:\s+[^\s<>()]+)*/g, (rawUrl) => {
        const url = rawUrl.replace(/\s+/g, ""); // remove ALL whitespace

        try {
            const decoded = decodeURI(url);

            const isSuspicious =
                decoded.length > 200 ||
                decoded.includes("xn--") ||
                /[^\x00-\x7F]/.test(decoded);

            if (isSuspicious) {
                return `\`${url}\``;
            }

            new URL(url);
            return url;

        } catch {
            return `\`${url}\``;
        }
    });

    return result;
}
function serialize(node: HtmlParser.Node): string {
    // Handle text nodes (and other non-element nodes)
    if (!('tagName' in node)) {
        const text = (node as any).data ?? (node as any).textContent ?? '';
        return escapeHtml(text);
    }

    // now we know it's an element
    const el = node as HtmlParser.HTMLElement;
    const tag = el.tagName.toLowerCase();

    // compute inner content once
    const inner = el.childNodes?.map(serialize).join("") ?? "";

    switch (tag) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
        case "p":
        case "ul":
        case "ol":
            return `<${tag}>${inner}</${tag}>`;

        case "a": {
            const href = el.getAttribute?.("href") ?? "";
            const safeHref = escapeHtml(href);
            return `<a href="${safeHref}">${inner}</a>`;
        }

        case "li":
            return `<li>${inner}</li>`;

        case "br":
            return "<br>";

        // case "img":
        // case "div":

        default:
            return inner;
    }
}