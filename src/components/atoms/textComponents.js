import React from "react";
import { useSelector } from "react-redux";
const { default: styled } = require("styled-components");

const stateMap = ({globalStyling}) => ({
    colors: globalStyling.colors,
    titleStyle: globalStyling.fonts.titles,
    paragraphStyle: globalStyling.fonts.paragraphs
})

const TitleOneComponent = styled.h1`
    margin: 0;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    text-transform: ${props => props.textTransform};
    letter-spacing: ${props => props.letterSpacing};
    line-height: ${props => props.lineHeight};
    font-style: ${props => props.fontStyle};
    text-align: center;
`
const TitleTwoComponent = styled.h2`
    margin: 0;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    text-transform: ${props => props.textTransform};
    letter-spacing: ${props => props.letterSpacing};
    line-height: ${props => props.lineHeight};
    font-style: ${props => props.fontStyle};
`
const TitleThreeComponent = styled.h3`
    margin: 0;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    text-transform: ${props => props.textTransform};
    letter-spacing: ${props => props.letterSpacing};
    line-height: ${props => props.lineHeight};
    font-style: ${props => props.fontStyle};
`
const TitleFourComponent = styled.h4`
    margin: 0;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    text-transform: ${props => props.textTransform};
    letter-spacing: ${props => props.letterSpacing};
    line-height: ${props => props.lineHeight};
    font-style: ${props => props.fontStyle};
`
const ParagraphComponent = styled.p`
    margin: 0;
    color: ${props => props.color},
    font-size: ${props => props.fontSize},
    font-family: ${props => props.fontFamily},
    font-weight: ${props => props.fontWeight},
    text-transform: ${props => props.textTransform},
    letter-spacing: ${props => props.letterSpacing},
    line-height: ${props => props.lineHeight},
`

const TextComponent = ({properties, sectionTheme}) => {
    const {tag, bold, italic, textAlign, text} = properties;
    const {colors, themes, titleStyle, paragraphStyle} = useSelector(stateMap);
    const fontSize = `${tag === "title1" || "title2" || "title3" || "title4" ? titleStyle.sizes[tag] : paragraphStyle.sizes[tag]}`;
    const lineHeight = `${tag === "title1" || "title2" || "title3" || "title4" ? titleStyle.lineHeight : paragraphStyle.lineHeight}`;
    const letterSpacing = `${tag === "title1" || "title2" || "title3" || "title4" ? titleStyle.letterSpacing : paragraphStyle.letterSpacing}`
    const fontWeight = `${tag === "title1" || "title2" || "title3" || "title4" ? titleStyle.weight : paragraphStyle.weight}`

    const titleColor = colors[sectionTheme.text.titles];
    const paragraphColor = colors[sectionTheme.text.paragraphs];

    const components = {
        title1: TitleOneComponent,
        title2: TitleTwoComponent,
        title3: TitleThreeComponent,
        title4: TitleFourComponent,
        paragraph1: ParagraphComponent,
        paragraph2: ParagraphComponent,
        paragraph3: ParagraphComponent,
    }

    const TextTag = components[tag];

    return(
        React.createElement(
            TextTag,
            {
                fontWeight: `${bold ? "800" : fontWeight}`, 
                fontSize: `${fontSize}rem`, 
                fontStyle: `${italic ? "italic": "normal"}`, 
                textAlign: textAlign,
                color: `${tag === "paragraph1" || "paragraph2" || "paragraph3" ? paragraphColor : titleColor}`,
                lineHeight: `${lineHeight}em`,
                letterSpacing: `${letterSpacing}em`
            },
            `${text}`
        )
    )
}

export default TextComponent;