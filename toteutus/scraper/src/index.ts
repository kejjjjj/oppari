import { getEveryWordpressPage } from "./get/page.js";

const TARGET_URL = "www.hamk.fi";

try {
    const results = await getEveryWordpressPage(TARGET_URL, 1000);

    console.log("RESULTS: ", results);

    
} catch(ex : unknown) {
    console.error(ex);
}

console.log("finished!");