function createSection(className, content){
    var section = [];

    section.push(`<section class="${className || ""}">`);
    section.push(content);
    section.push(`</section>`)
    return section.join('');
}
function createDiv(className, content){
    var div = `<div class="${className || ""}">${content} </div>`;
    return div;
}
function createText(tag, content, className){
    var text = `<${tag} class="${className || ""}">${content}</${tag}>`
    return text;
}
function createImage(link, className, alt){
    var image = `<img src="${link}" alt="${alt}" class="${className || ""}" />`
    return image;
}
function createLink(content, link, className){
    var linkElement = `<a href="${link}" class="${className || ""}">${content}</a>`;
    return linkElement;
}
function createContent(block, content){

    if (block.type === "section") {return createSection(block.class, content)};
    if (block.type === "div") {return createDiv(block.class, content)};
    if (block.type === "text") {return createText(block.tag, block.content, block.class)};
    if (block.type === "image") {return createImage(block.link, block.class, block.alt)};
    if (block.type === "link") {return createLink(content, block.link, block.class)};

    return;
}
function checkContent(block){
    var element = '';

    if(block.blocks){
        var content = [];
        block.blocks.forEach(element => {
            content.push(checkContent(element));
        });
        
        element = createContent(block, content.join(''));
        return element;
    };

    element = createContent(block);
    return element;
}

function createBody(data){
    console.log(data)
    var body = []
    body.push('<body>');
    data.forEach(element => {
        body.push(checkContent(element));
    })
    body.push('</body>')
    return body.join('')

}

exports.createBody = createBody;