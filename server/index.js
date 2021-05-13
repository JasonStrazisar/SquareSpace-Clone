const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createWebsite } = require("./createSimpleWebsite/createSimpleWebsite");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: true}));

app.get("/", (req, res) => {
    res.json({message: "Bienvenue sur Wix"})
})

app.post("/simple-website", createWebsite);

app.listen(4000, () => {
    console.log("Server Is Running !")
})

function zizi(website){

    createWebsite(website);

}



const website = {

    properties: {
        name: "Zoo de Beauval"
    },

    pages: [
        {title: "Accueil", link: "index", description: "This is a test app from my ass"},
        {title: "A propos", link: "about", description: "This is the about page of my ass website !" },
        {title: "Contact", link: "contact", description: "This is the contact page of my dick sa daronne..." }
    ],

    pagesContent: {

        index: [
            {"type": "section", "blocks": [
                { "type": "text", "content": "Foto de mon fiak", "tag": "h2" },
                { "type": "image", "link": "https://cdn-images.zoobeauval.com/j9tWE2sWeL7mDaWyJ-pFKpw2VAY=/634x642/https://s3.eu-west-3.amazonaws.com/assets.zoobeauval.com/2021/5/static/leaves/composition-spatule.d3e48221.webp" }
                ]
            },
            {"type": "section", "blocks": [
                { "type": "text", "content": "Lettre d'amour a mon cul", "tag": "h2" },
                { "type": "text", "content": "Wsh batard t'a un bo fiak zer", "tag": "p" }
                ]
            }
        ],

        about: [
            {
                "type": "section", "blocks": [
                    { "type": "text", "content": "Foto de ton fiak", "tag": "h2" },
                    { "type": "image", "link": "https://cdn-images.zoobeauval.com/j9tWE2sWeL7mDaWyJ-pFKpw2VAY=/634x642/https://s3.eu-west-3.amazonaws.com/assets.zoobeauval.com/2021/5/static/leaves/composition-spatule.d3e48221.webp" }
                ]
            },
            {
                "type": "section", "blocks": [
                    { "type": "text", "content": "Lettre d'amour a mon cul", "tag": "h2" },
                    { "type": "text", "content": "Wsh batard t'a un bo fiak zer", "tag": "p" }
                ]
            }
        ],

        contact: [
            {
                "type": "section", "blocks": [
                    { "type": "text", "content": "Foto de son fiak", "tag": "h2" },
                    { "type": "image", "link": "https://cdn-images.zoobeauval.com/j9tWE2sWeL7mDaWyJ-pFKpw2VAY=/634x642/https://s3.eu-west-3.amazonaws.com/assets.zoobeauval.com/2021/5/static/leaves/composition-spatule.d3e48221.webp" }
                ]
            },
            {
                "type": "section", "blocks": [
                    { "type": "text", "content": "Lettre d'amour a mon cul", "tag": "h2" },
                    { "type": "text", "content": "Wsh batard t'a un bo fiak zer", "tag": "p" }
                ]
            }
        ]

    }

}


zizi(website)