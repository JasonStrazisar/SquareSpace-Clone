var fs = require("fs");
const { createBody } = require("./createBody");
const { createHead } = require("./createHead");
const { createHeader } = require("./createHeader");



function createPage(websiteProperties, pageInfo, pages, content){

    var pageHead = createHead(websiteProperties, pageInfo);
    var pageHeader = createHeader(websiteProperties, pages, pageInfo.title);
    var pageBody = createBody(content);
    var page = pageHead + pageHeader + pageBody
    
    var siteDirectory = `./files/${websiteProperties.name}/${pageInfo.link}.html`


    fs.writeFile(siteDirectory, page, (err) => {
        if(err) throw err;

        console.log("Page successfully created !")
    });

}

exports.createPage = createPage;