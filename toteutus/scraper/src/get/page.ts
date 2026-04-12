import type { WpPage } from "./defs.js"

function normalizeUrl(url: string): string {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return `https://${url}`;
    }
    return url;
}

type WpPageResults = {
    totalPagesCount : number;
    remainingPages : number; // remaining pages
    pages : WpPage[];
};

async function getWordpressPage(url: string, pageNumber: number = 1, perPage : number = 10) : Promise<WpPageResults>{

    const realUrl = normalizeUrl(`${url}/wp-json/wp/v2/pages`);
    const parms = new URLSearchParams();

    parms.append("per_page", perPage.toString());
    parms.append("page", (pageNumber < 1 ? 1 : pageNumber).toString());
    
    const fullQuery = `${realUrl}?${parms.toString()}`;

    const res = await fetch(fullQuery, {
        headers: {
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
            "(KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        "Accept": "application/json"
        }
    });

    if(!res.ok)
        throw new Error(`Request failed for "${parms}": ${res.status}`);

    const totalPagesCount = res.headers.get("X-WP-Total") || "0";
    const remainingPages = res.headers.get("X-WP-TotalPages") || "0";

    return { 
        totalPagesCount: Number.parseInt(totalPagesCount), 
        remainingPages: Number.parseInt(remainingPages), 
        pages: (await res.json()) as WpPage[] 
    };
}
function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function getEveryWordpressPage(url: string, intervalMs : number = 1000) : Promise<WpPage[]> {


    let fetchedPages : WpPageResults;
    let page = 1;

    const browsedPages = new Map<string, WpPage>();

    do{
        console.log("page: ", page);
        fetchedPages = await getWordpressPage(url, page++, 10);
        
        for(const resultPage of fetchedPages.pages){

            if(browsedPages.has(resultPage.link))
                continue;

            browsedPages.set(resultPage.link, resultPage);
            console.log(resultPage.link);
        }

        await sleep(intervalMs);

    } while (fetchedPages.remainingPages > 0);

    return Array.from(browsedPages.values());
}
