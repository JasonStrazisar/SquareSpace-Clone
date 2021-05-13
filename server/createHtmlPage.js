function createPage(head, body){

    var htmlPage = createHtmlHead(head) + createHtmlBody(body) + "</html>";

    return htmlPage.replaceAll(",", " ");

}

function createHtmlHead(head){
    var htmlHeadInArray = [];
    htmlHeadInArray.push('<!DOCTYPE html> <html> <head> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">');

    head.forEach(element => {
        htmlHeadInArray.push(checkHeaderContent(element));
    });

    htmlHeadInArray.push('<link rel="stylesheet" href="./style.css"/> </head>');
    return htmlHeadInArray.toString();

}
function checkHeaderContent(headContent){
    const {type, content} = headContent
    var headTag = "";
    if(type === "title"){
        headTag = `<title>${content}</title>`;
        return headTag;
    }
    if(type === "description"){
        headTag = `<meta name="description" content="${content}">`;
        return headTag;
    }
}

function createHtmlBody(body){
    var htmlBodyInArray = [];
    htmlBodyInArray.push("<body>");

    body.forEach(element => {
        htmlBodyInArray.push(checkBodyBlocks(element))
    })

    htmlBodyInArray.push("</body>");
    return htmlBodyInArray.toString();
}
function checkBodyBlocks(block){
    var htmlBlockInArray = [];
    
    if(block.type === "header"){
        htmlBlockInArray.push(`<header class="${block.class || ""}">`);
        htmlBlockInArray.push(checkSectionBlocks(block.blocks));
        htmlBlockInArray.push("</header>");
        return htmlBlockInArray.toString();
    }
    if (block.type === "section") {
        htmlBlockInArray.push(`<div class="${block.class || ""}">`);
        htmlBlockInArray.push(checkSectionBlocks(block.blocks));
        htmlBlockInArray.push("</div>");
        return htmlBlockInArray.toString();
    }
}
function checkSectionBlocks(blocks){
    var bodyTags = [];

    blocks.forEach(element => {
        if (element.type === "h1") {
            bodyTags.push(`<h1 class="${element.class}">${element.content}</h1>`);
        }
        if (element.type === "link") {
            bodyTags.push(`<a href="${element.to}"> ${element.name}</a>`);
        }
        if (element.type === "h2") {
            bodyTags.push(`<h2>${element.content}</h2>`);
        }
        if (element.type === "image") {
            bodyTags.push(`<img src="${element.link}" alt=${element.alt || "rien"} />`);
        }
        if (element.type === "paragraph") {
            bodyTags.push(`<p>${element.content}</p>`);
        }
    });

    return bodyTags.toString();

}

exports.createHtmlPage = createPage;