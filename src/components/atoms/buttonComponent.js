import React from "react";
import { useSelector } from "react-redux";
const { default: styled } = require("styled-components");

const stateMap = ({globalStyling}) => ({
    buttonsStyle: globalStyling.buttons,
    buttonFontStyle: globalStyling.fonts.buttons,
    colors: globalStyling.colors,
})

const SolidButton = styled.button`
    border: none;
    font-size: ${props => props.fontSize};
    padding: ${props => props.padding};
    color: ${props => props.color};
    background: ${props => props.background};
    font-weight: ${props => props.fontWeight};
    border-radius: ${props => props.borderRadius};
    text-align: center;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
    transition: 0.1s linear;
`

const BorderButton = styled.button`
    border: 2.5px solid ${props => props.background};
    font-size: ${props => props.fontSize};
    padding: ${props => props.padding};
    color: ${props => props.background};
    background: none;
    font-weight: ${props => props.fontWeight};
    border-radius: ${props => props.borderRadius};
    cursor: pointer;
    &:hover {
        color: ${props => props.color};
        background: ${props => props.background};
    }
    transition: 0.1s linear;
`


const ButtonComponent = ({properties, sectionTheme}) => {
    const {label, link, size, align} = properties;
    const {buttonFontStyle, buttonsStyle, colors} = useSelector(stateMap);

    const fontSize = `${buttonFontStyle.sizes[size]}rem`;
    const padding = `${buttonsStyle.padding}em`;

    const color = `${colors[sectionTheme.buttons.text]}`;
    const background = `${colors[sectionTheme.buttons.background]}`;
    const fontWeight = `${buttonFontStyle.weight}`
    const borderRadius = () => {
        if(buttonsStyle.shape === "square"){return "0"};
        if(buttonsStyle.shape === "rounded"){return "0.4rem"};
        if(buttonsStyle.shape === "pills"){return "50px"};
    }

    const components = {
        solid: SolidButton,
        border: BorderButton
    }

    const ButtonTag = components[buttonsStyle.style]

    return(
        React.createElement(
            ButtonTag, 
            {
                fontSize: fontSize,
                padding: padding,
                color: color,
                background: background,
                fontWeight: fontWeight,
                borderRadius: borderRadius
            },
            `${label}`
        )
    )

}

export default ButtonComponent;