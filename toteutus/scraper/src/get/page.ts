import type { WpPage } from "./wordpress.js"

function normalizeUrl(url: string): string {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return `https://${url}`;
    }
    return url;
}

export async function getWordpressPage(url: string, index: number | null = null) : Promise<WpPage[]>{

    const realUrl = normalizeUrl(`${url}/wp-json/wp/v2/pages/${index ?? ""}`);
    
    const res = await fetch(realUrl, {
        headers: {
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        "Accept": "application/json"
        }
    });

    if(!res.ok)
        throw new Error(`Request failed for "${realUrl}": ${res.status}`);

    return (await res.json()) as WpPage[];
}
