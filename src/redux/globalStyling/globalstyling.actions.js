import globalStylingTypes from "./globalstyling.types";

export const getGlobalStyling = () => ({
    type: globalStylingTypes.GET_GLOBALSTYLING,
    payload: ''
});

export const setGlobalStyling = styling => ({
    type: globalStylingTypes.SET_GLOBALSTYLING,
    payload: styling
})