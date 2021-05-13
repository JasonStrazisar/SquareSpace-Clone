import globalStylingTypes from "./globalstyling.types";

const INITAL_STATE = {
    colors: {
        primary: "#DF7C6D",
        secondary: "#F6EBEA",
        third: "#361B17",
        white: "#fff",
        black: "#000",
    },
    themes: [
        {
            id: "white",
            name: "Blanc (minimal)",
            primary: "white",
            secondary: "black",
            header: {title: "black", links: "black"},
            wholeSite: {background: "white"}
        },
        {
            id: "boldWhite",
            name: "Gras (blanc)",
            primary: "white",
            secondary: "primary",
            header: { title: "primary", links: "black" },
            wholeSite: { background: "white" }
        },
        {
            id: "light",
            name: "Clair (minimal)",
            primary: "secondary",
            secondary: "black",
            header: { title: "black", links: "black" },
            wholeSite: { background: "secondary" }
        },
        {
            id: "boldLight",
            name: "Gras (clair)",
            primary: "secondary",
            secondary: "primary",
            header: { title: "primary", links: "black" },
            wholeSite: { background: "secondary" }
        },
        {
            id: "dark",
            name: "Foncé (minimal)",
            primary: "third",
            secondary: "white",
            header: { title: "white", links: "white" },
            wholeSite: { background: "third" }
        },
        {
            id: "boldDark",
            name: "Gras (foncé)",
            primary: "third",
            secondary: "primary",
            header: { title: "primary", links: "primary" },
            wholeSite: { background: "third" }
        },
        {
            id: "black",
            name: "Noir (minimal)",
            primary: "black",
            secondary: "white",
            header: { title: "white", links: "white" },
            wholeSite: { background: "black" }
        },
        {
            id: "boldBlack",
            name: "Gras (noir)",
            primary: "black",
            secondary: "primary",
            header: { title: "primary", links: "primary" },
            wholeSite: { background: "black" }
        },
        {
            id: "emphasisDark",
            name: "Accent (foncé)",
            primary: "primary",
            secondary: "white",
            header: { title: "white", links: "white" },
            wholeSite: { background: "primary" }
        },
        {
            id: "emphasisLight",
            name: "Accent (clair)",
            primary: "white",
            secondary: "primary",
            header: { title: "primary", links: "primary" },
            wholeSite: { background: "white" }
        }
    ]
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