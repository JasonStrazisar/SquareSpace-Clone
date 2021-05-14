const INITAL_STATE = [

    {
        name: "Accueil",
        slug: "index",

        sections: [
            {
                verticalPadding: 10,
                horizontalPadding: 10,
                verticalAlign: "center",
                horizontalAlign: "center",
                background: {
                    url: "https://images.squarespace-cdn.com/content/v1/5ed010b3abd5dd03815bf00f/1590694093363-ZJCNI38RXJEUCCIDYXGT/ke17ZwdGBToddI8pDm48kOxLRGAfd8DHyn-VO-OS79h7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlnKv1yxoTk5msUVUpzS-jwidPkl-46T667XTMzLYTMBnw/pickle-perfection-v1.jpg?format=500w",
                    size: "cover",
                },
                theme: "boldLight",
                content: [
                    {
                        type: "text",
                        tag: "title1",
                        bold: true,
                        italic: false,
                        link: null,
                        textAlign: "center",
                        text: "Le summum des pickles"
                    },
                    {
                        type: "button",
                        label: "Acheter Maintenant",
                        link: "/shop",
                        size: "big",
                        align: "center"
                    }
                ]
            }
        ]
    }

]

const pagesContentReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
        default: 
            return state;
    }
}

export default pagesContentReducer;