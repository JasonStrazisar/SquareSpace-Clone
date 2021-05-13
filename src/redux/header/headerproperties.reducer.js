import headerPropertiesTypes from "./headerproperties.types";

const INITAL_STATE = {
    display: 'centered',
    transparent: false,
    horizontalPadding: 2,
    verticalPadding: 2,
    linksSpacing: 2,
    fixed: false,
    theme: 'light'   
}

const headerPropertiesReducer = (state = INITAL_STATE, action) => {

    switch(action.type){
        case headerPropertiesTypes.SET_HEADER_PROPERTIES:
            return {
                ...state,
                headerProperties: action.payload
            };
        case headerPropertiesTypes.SET_HEADER_DISPLAY: 
            return{
                ...state,
                display: action.payload
            };
        case headerPropertiesTypes.SET_HEADER_TRANSPARENT:
            return{
                ...state,
                transparent: action.payload
            };
        case headerPropertiesTypes.SET_HEADER_THEME: 
            return{
                ...state,
                theme: action.payload
            };
        case headerPropertiesTypes.SET_HEADER_FIXED:
            return{
                ...state,
                fixed: action.payload
            }
        default: 
            return state;
    }

}

export default headerPropertiesReducer;