import {configureStore} from "@reduxjs/toolkit";
import globalStylingReducer from "./globalStyling/globalstyling.reducer";
import headerPropertiesReducer from "./header/headerproperties.reducer";
import websitePropertiesReducer from "./websiteProperties/websiteproperties.reducer";

export default configureStore({
    reducer: {
        websiteProperties: websitePropertiesReducer,
        headerProperties: headerPropertiesReducer,
        globalStyling: globalStylingReducer
    }
})