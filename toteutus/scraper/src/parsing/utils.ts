export function findClosingTag(body: string, tag: string): number {
    const openTag = `<${tag}`;
    const closeTag = `</${tag}>`;

    let numOpen = 0;
    let numClose = 0;

    for(let i = 0; i < body.length; i++) {

        if(body.startsWith(openTag, i)) {
            numOpen++;
            i += openTag.length - 1;
        }
        else if(body.startsWith(closeTag, i)) {
            numClose++;
            i += closeTag.length - 1;
        }

        if(numOpen > 0 && numOpen === numClose) {
            return i;
        }
    }

    return -1;
}