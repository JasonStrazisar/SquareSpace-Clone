import websitePropertiesTypes from "./websiteproperties.types";

export const getWebsiteProperties = () => ({
    type: websitePropertiesTypes.GET_WEBSITE_PROPERTIES,
    payload: ''
});

export const setWebsiteProperties = properties => ({
    type: websitePropertiesTypes.SET_WEBSITE_PROPERTIES,
    payload: properties
})

export const setWebsiteName = name => ({
    type: websitePropertiesTypes.SET_WEBSITE_NAME,
    payload: name
})