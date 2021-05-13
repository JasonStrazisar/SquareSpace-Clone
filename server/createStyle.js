function createSectionStyle(object){
    var style = [];

    if(object.style){
        style.push(`.${object.class}{`)
        object.style.forEach(element => {
            style.push(defineStyle(element));
        });
        style.push("}");
        style.push(createComponentBlocksStyle(object.blocks))
    }
    
    return style.join('');
}

function createComponentBlocksStyle(components){
    var style = [];

    components.forEach(component => {
        if(component.class && component.style){
            style.push(`.${component.class}{`);

            component.style.forEach(styles => {
                style.push(defineStyle(styles));
            });

            style.push('}');
        } 
    })

    return style.join('');
    
    
}

function defineStyle(element){
    var style = `${element.type}: ${element.property};`;

    return style;
}

function createCssPage(content){

    var style = [];
    style.push('*{font-family: "Roboto", sans-serif; margin: 0; padding: 0;}')
    content.forEach(element => {
        style.push(createSectionStyle(element));
    })
    var styleContent = style.join('');

    return styleContent

}

exports.createCss = createCssPage