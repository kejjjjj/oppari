import { convertHtmlToMarkdown } from "./conversion/conversion.js";
import { getEveryWordpressPage } from "./get/page.js";
import { parseWordPressPage } from "./parsing/page.js";
import * as fs from "fs";
import * as path from "path";

const TARGET_URL = "www.hamk.fi";
const MY_URL = "kejjjjj.github.io/thesis/docs/hamk";
const OUTPUT_DIR = path.join(import.meta.dirname, "hamk");

type Markdown = string;

try {
    console.log(`output: ${OUTPUT_DIR}`);
    const results = await getEveryWordpressPage(TARGET_URL, 1000);
    const markdownData = new Map<string, Markdown>();

    for(const page of results){

        // remove leading + trailing slash
        const key = (new URL(page.link)).pathname.replace(/^\/|\/$/g, "") || "index";

        const htmlCode = parseWordPressPage(page);
        const markdown = convertHtmlToMarkdown(htmlCode);

        markdownData.set(key, markdown);    
    }

    const regex = new RegExp(`https?://${TARGET_URL}/([^\\s"')]+)`, "g");
    const updatedMap = new Map<string, Markdown>();

    for (const [key, markdown] of markdownData.entries()) {
        const changes: { before: string; after: string }[] = [];

        const updatedMarkdown = markdown.replace(regex, (match, page) => {
            const pageKey = page.replace(/^\/|\/$/g, "");

            if (markdownData.has(pageKey)) {
                const newUrl = `https://${MY_URL}/${pageKey}`;

                // capture the exact line where the change happens
                const line = markdown.split("\n").find(l => l.includes(match)) || match;

                changes.push({
                    before: line,
                    after: line.replace(match, newUrl),
                });

                return newUrl;
            }

            return match;
        });

        // if (changes.length > 0) {
        //     console.log(`Updated: ${key}`);

        //     for (const change of changes) {
        //         console.log("  Before:", change.before);
        //         console.log("  After :", change.after);
        //         console.log("  ---");
        //     }

        //     console.log("----");
        // }

        updatedMap.set(key, updatedMarkdown.replace("https:// ", "https://"));
    }
    if(fs.existsSync(`./${OUTPUT_DIR}`))
        fs.rmSync(`./${OUTPUT_DIR}`, { recursive: true, force: true });

    // create a directory structure and save markdown files and use the fs library to write the files to disk
    for (const [key, markdown] of updatedMap.entries()) {
        const safeKey = (key || "index").replace(/[<>:"|?*]/g, ""); // remove weird characters
        const filePath = path.join(OUTPUT_DIR, `${safeKey}.md`);
        const dirPath = path.dirname(filePath);

        fs.mkdirSync(dirPath, { recursive: true });
        fs.writeFileSync(filePath, markdown, "utf-8");
        console.log(`Saved: ${filePath}`);
    }
    
} catch(ex : unknown) {
    console.error(ex);
}

console.log("finished!");