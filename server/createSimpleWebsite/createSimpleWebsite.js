var fs = require("fs");
const { createPage } = require("./createPage");

function createWebsiteFolder(folderName){
    try {
        if (!fs.existsSync(`./files/${folderName}`)) {
            fs.mkdirSync(`./files/${folderName}`);
            console.log("Website folder successfully created !");
        } else {
            console.log("Directory already existst.");
        }
    } catch (err) {
        console.log(err);
    };
}

function createWebsite(req, res) {

    const website = req.body;

    const websiteProperties = website.properties;
    const pages = website.pages;
    const pagesContent = website.pagesContent;

    createWebsiteFolder(websiteProperties.name);

    pages.forEach(page => {
        createPage(websiteProperties, page, pages, pagesContent[page.link])
    });

    res.send("Site web créé");

  
}

exports.createWebsite = createWebsite;