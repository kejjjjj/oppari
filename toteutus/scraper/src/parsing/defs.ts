
export interface MarkdownData {
    type: "heading" | "paragraph" | "link" | "image",
    level?: number,
    text?: string,
    href?: string,
    src?: string,
    alt?: string
}
