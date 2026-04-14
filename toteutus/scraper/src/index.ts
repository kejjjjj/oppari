import { convertHtmlToMarkdown } from "./conversion/conversion.js";
import { getEveryWordpressPage } from "./get/page.js";
import { parseWordPressPage } from "./parsing/page.js";

const TARGET_URL = "www.hamk.fi";

try {
    const results = await getEveryWordpressPage(TARGET_URL, 1000);

    for(const page of results){
        const htmlCode = parseWordPressPage(page);
        const markdown = convertHtmlToMarkdown(htmlCode);

        console.log(markdown);
    }

    //console.log("RESULTS: ", results);

    
} catch(ex : unknown) {
    console.error(ex);
}

console.log("finished!");