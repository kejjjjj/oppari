import TurndownService from "turndown";

export function convertHtmlToMarkdown(html: string): string {
    const turndown = new TurndownService();
    return turndown.turndown(html);
}
