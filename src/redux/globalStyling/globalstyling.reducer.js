import globalStylingTypes from "./globalstyling.types";

const INITAL_STATE = {
    colors: {
        primary: "#DF7C6D",
        secondary: "#F6EBEA",
        third: "#361B17",
        white: "#ffffff",
        black: "#000000",
    },
    fonts: {
        baseSize: "17px",
        fontFamily: "",
        titles: {
            fontFamily: "",
            weight: "500",
            lineHeight: 1.4,
            letterSpacing: 0,
            textTransform: null,
            sizes: {
                title1: 4,
                title2: 2.8,
                title3: 2.2,
                title4: 1.2
            }
        },
        paragraphs: {
            fontFamily: "",
            weight: "300",
            lineHeight: 1.8,
            letterSpacing: 0,
            textTransform: null,
            sizes: {
                paragraph1: 1.4,
                paragraph2: 1,
                paragraph3: 0.9
            }
        },
        buttons: {
            fontFamily: "",
            weight: "500",
            letterSpacing: 0.02,
            textTransform: null,

            sizes: {
                big: 1.1,
                medium: 1,
                small: 0.9
            }
        }
    },
    buttons: {
        style: "solid",
        shape: "pills",
        padding: 1.2
    },
    videos: {
        width: "1400px",
        height: "780px"
    },  

    themes: {
        white: {
            id: "white",
            name: "Blanc (minimal)",
            primary: "white",
            secondary: "black",
            header: {title: "black", links: "black"},
            wholeSite: {background: "white"},
            text: {titles: "black", paragraphs: "black"},
            buttons: {background: "primary", text: "white"},
        },
        boldWhite: {
            id: "boldWhite",
            name: "Gras (blanc)",
            primary: "white",
            secondary: "primary",
            header: { title: "primary", links: "black" },
            wholeSite: { background: "white" },
            text: { titles: "primary", paragraphs: "black" },
            buttons: { background: "primary", text: "white" }
        },
        light: {
            id: "light",
            name: "Clair (minimal)",
            primary: "secondary",
            secondary: "black",
            header: { title: "black", links: "black" },
            wholeSite: { background: "secondary" },
            text: { titles: "black", paragraphs: "black" },
            buttons: { background: "primary", text: "white" }
        },
        boldLight: {
            id: "boldLight",
            name: "Gras (clair)",
            primary: "secondary",
            secondary: "primary",
            header: { title: "primary", links: "black" },
            wholeSite: { background: "secondary" },
            text: { titles: "primary", paragraphs: "black" },
            buttons: { background: "primary", text: "white" }
        },
        dark: {
            id: "dark",
            name: "Foncé (minimal)",
            primary: "third",
            secondary: "white",
            header: { title: "white", links: "white" },
            wholeSite: { background: "third" },
            text: { titles: "white", paragraphs: "white" },
            buttons: { background: "primary", text: "white" }
        },
        boldDark: {
            id: "boldDark",
            name: "Gras (foncé)",
            primary: "third",
            secondary: "primary",
            header: { title: "primary", links: "primary" },
            wholeSite: { background: "third" },
            text: { titles: "primary", paragraphs: "white" },
            buttons: { background: "primary", text: "white" }
        },
        black: {
            id: "black",
            name: "Noir (minimal)",
            primary: "black",
            secondary: "white",
            header: { title: "white", links: "white" },
            wholeSite: { background: "black" },
            text: { titles: "white", paragraphs: "white" },
            buttons: { background: "primary", text: "white" }
        },
        boldBlack: {
            id: "boldBlack",
            name: "Gras (noir)",
            primary: "black",
            secondary: "primary",
            header: { title: "primary", links: "primary" },
            wholeSite: { background: "black" },
            text: { titles: "primary", paragraphs: "white" },
            buttons: { background: "primary", text: "white" }
        },
        emphasisDark: {
            id: "emphasisDark",
            name: "Accent (foncé)",
            primary: "primary",
            secondary: "white",
            header: { title: "white", links: "white" },
            wholeSite: { background: "primary" },
            text: { titles: "white", paragraphs: "white" },
            buttons: { background: "white", text: "primary" }
            
        },
        emphasisLight: {
            id: "emphasisLight",
            name: "Accent (clair)",
            primary: "white",
            secondary: "primary",
            header: { title: "primary", links: "primary" },
            wholeSite: { background: "white" },
            text: { titles: "primary", paragraphs: "primary" },
            buttons: { background: "primary", text: "white" }
        }
    }
}

const globalStylingReducer = (state = INITAL_STATE, action) => {

    switch(action.type){
        case globalStylingTypes.SET_GLOBALSTYLING:
            return{
                ...state,
                globalStyling: action.payload
            }
        default: 
            return state;
    }

}

export default globalStylingReducer;