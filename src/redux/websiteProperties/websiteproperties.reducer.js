import websitePropertiesTypes from './websiteproperties.types';

const INITAL_STATE = {
    name: 'Jason',
    logo: null,
    pages: [
        {label: "Acheter", link: ""},
        {label: "Notre histoire", link: ""},
        {label: "Blog", link: ""}
    ]
}

const websitePropertiesReducer = (state = INITAL_STATE, action) => {

    switch(action.type){
        case websitePropertiesTypes.SET_WEBSITE_PROPERTIES:
            return {
                ...state,
                websiteProperties: action.payload
            }
        case websitePropertiesTypes.SET_WEBSITE_NAME:
            return{
                ...state,
                name: action.payload
            }
        default: 
            return state;
    }

}

export default websitePropertiesReducer;