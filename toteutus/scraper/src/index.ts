import { getEveryWordpressPage } from "./get/page.js";
import { parseWordPressPage } from "./parsing/page.js";

const TARGET_URL = "www.hamk.fi";

try {
    const results = await getEveryWordpressPage(TARGET_URL, 1000);

    for(const page of results){
        const _ = parseWordPressPage(page);
        //console.log(result);
    }

    //console.log("RESULTS: ", results);

    
} catch(ex : unknown) {
    console.error(ex);
}

console.log("finished!");