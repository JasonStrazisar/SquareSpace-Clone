import headerPropertiesTypes from "./headerproperties.types";

export const getHeaderProperties = () => ({
    type: headerPropertiesTypes.GET_HEADER_PROPERTIES,
    payload: ''
});

export const setHeaderProperties = properties => ({
    type: headerPropertiesTypes.SET_HEADER_PROPERTIES,
    payload: properties
});

export const setHeaderDisplay = display => ({
    type: headerPropertiesTypes.SET_HEADER_DISPLAY,
    payload: display
});

export const setHeaderTransparent = transparent => ({
    type: headerPropertiesTypes.SET_HEADER_TRANSPARENT,
    payload: transparent
});

export const setHeaderTheme = theme => ({
    type: headerPropertiesTypes.SET_HEADER_THEME,
    payload: theme
});

export const setHeaderFixed = fixed => ({
    type: headerPropertiesTypes.SET_HEADER_FIXED,
    payload: fixed
});