import { getWordpressPage } from "./get/page.js";

try {
    const pages = await getWordpressPage("www.hamk.fi");

    for(const page of pages){
        console.log(page.link);
    }
    
} catch(ex : unknown) {
    console.error(ex);
}

console.log("finished!");