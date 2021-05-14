import React from "react";
import { useSelector } from "react-redux"

import TextComponent from "../atoms/textComponents";
import ButtonComponent from "../atoms/buttonComponent";
import LinesComponent from "../atoms/lineComponent";
import SpacingComponent from "../atoms/spacingComponent";
import VideoComponent from "../atoms/videoComponent";
const { default: styled } = require("styled-components")

const mapState = ({pagesContent, globalStyling}) => ({

    sectionContent: pagesContent[0].sections[0].content,
    sectionProperties: pagesContent[0].sections[0],
    colors: globalStyling.colors,
    themes: globalStyling.themes,

})

const SectionComponent = styled.section`
    text-align: center;
    padding: 12vh 10vh 6vh 10vh;
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.backgroundImage ? `
        background-image: linear-gradient(${props.sectionBackground}33, ${props.sectionBackground}33), url(${props.backgroundImage});
        background-repeat: no-repeat;
        background-size: cover;
    ` : `
        background: ${props.sectionBackground};
    `}
    
`
const ContentContainer = styled.div`
    width: ${props => props.contentWidth}
`

const CheckContentType = ({content, sectionTheme}) => {
    const {type, ...otherProperties} = content;

    const components = {
        button: ButtonComponent,
        text: TextComponent,
        video: VideoComponent,
        space: SpacingComponent,
        line: LinesComponent
    }

    const ComponentTag = components[type];

    return(
        React.createElement(
            ComponentTag,
            {
                properties: otherProperties,
                sectionTheme: sectionTheme
            }
        )
    )

}

const Section = () => {
    const {sectionContent, sectionProperties, colors, themes} = useSelector(mapState);
    const {background} = sectionProperties;
    const selectedTheme = themes["boldLight"];
    const sectionBackground = colors[selectedTheme.wholeSite.background]

    return(
        <SectionComponent backgroundImage={background.url} sectionBackground={sectionBackground}>
            <ContentContainer contentWidth="50%">
                {sectionContent.map((content, index) => (
                    <CheckContentType content={content} key={index} sectionTheme={selectedTheme} />
                ))}

                
            </ContentContainer>
        </SectionComponent>
    )
}

export default Section