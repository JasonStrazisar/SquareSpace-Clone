import { useSelector } from "react-redux";
import LogoComponent from "./components/logo";
import NavBar from "./components/navBar";
import styled from "styled-components";

const mapState = ({headerProperties, globalStyling}) => ({
    headerDisplay: headerProperties.display,
    properties: headerProperties,
    colors: globalStyling.colors,
    themes: globalStyling.themes,
    headerTheme: headerProperties.theme
});

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    background: ${props => props.background};
    padding: ${props => props.verticalPadding}vw ${props => props.horizontalPadding}vw;
    align-items: center;

`

const HeaderLeftBetween = ({ properties, backgroundColor, titleColor, linkColor}) => {
    const {transparent, fixed, horizontalPadding, verticalPadding} = properties;
    return(

        <HeaderContainer background={transparent ? "" : backgroundColor} verticalPadding={verticalPadding} horizontalPadding={horizontalPadding} position={fixed ? "fixed" : "relative"} >
            <div style={{flex: "1"}}>
                <LogoComponent titleColor={titleColor} />
            </div>
            
            <div style={{ display: "flex", alignItems: "center" }} >
                <NavBar linkColor={linkColor} />

                <div>

                </div>
            </div>
        </HeaderContainer>
    )
}
const HeaderLeftLeft = ({ properties, backgroundColor, titleColor, linkColor}) => {
    const {transparent, fixed, horizontalPadding, verticalPadding} = properties;

    return(
        <HeaderContainer background={transparent ? "" : backgroundColor} verticalPadding={verticalPadding} horizontalPadding={horizontalPadding} position={fixed ? "fixed" : "relative"} >
            <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
                <LogoComponent titleColor={titleColor} />
                <NavBar linkColor={linkColor} />
            </div>

            <div style={{ flex: "1" }}>

            </div>
        </HeaderContainer>
    )
    
}
const HeaderLeftCenter = ({properties, backgroundColor, titleColor, linkColor}) => {
    const {transparent, fixed, horizontalPadding, verticalPadding} = properties;

    return(
        <HeaderContainer background={transparent ? "" : backgroundColor} verticalPadding={verticalPadding} horizontalPadding={horizontalPadding} position={fixed ? "fixed" : "relative"}>
            <div style={{flex: "1"}}>
                <LogoComponent titleColor={titleColor} />
            </div>
            
            
            <NavBar linkColor={linkColor} />

            <div style={{ flex: "1" }}>

            </div>
        </HeaderContainer>
    )

}
const HeaderCenter = ({ properties, backgroundColor, titleColor, linkColor}) => {

    const {transparent, fixed, horizontalPadding, verticalPadding} = properties;

    return (
        <HeaderContainer background={transparent ? "" : backgroundColor} verticalPadding={verticalPadding} horizontalPadding={horizontalPadding} position={fixed ? "fixed" : "relative"} >
            <div style={{ flex: "1" }}>
                <NavBar linkColor={linkColor} />
            </div>
            
            
            <LogoComponent titleColor={titleColor} />
            <div style={{ flex: "1" }}>

            </div>
        </HeaderContainer>
    )
}

const Header = () => {
    const  {headerDisplay, properties, colors, themes, headerTheme} = useSelector(mapState);
    const selectedTheme = themes[headerTheme];
    const titleColor = colors[selectedTheme.header.title];
    const backgroundColor = colors[selectedTheme.wholeSite.background];
    const linksColor = colors[selectedTheme.header.links];

    if(headerDisplay === "centered"){
        return(
            <HeaderCenter properties={properties} backgroundColor={backgroundColor} titleColor={titleColor} linkColor={linksColor}  />
        )
    }
    if (headerDisplay === "left-between"){
        return(
            <HeaderLeftBetween properties={properties} backgroundColor={backgroundColor} titleColor={titleColor} linkColor={linksColor} />
        )
    }
    if (headerDisplay === "left-left"){
        return(
            <HeaderLeftLeft properties={properties} backgroundColor={backgroundColor} titleColor={titleColor} linkColor={linksColor} />
        )
    }
    if (headerDisplay === "left-center"){
        return(
            <HeaderLeftCenter properties={properties} backgroundColor={backgroundColor} titleColor={titleColor} linkColor={linksColor}  />
        )
    }
}

export default Header;