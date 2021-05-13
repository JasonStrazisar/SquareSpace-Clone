import { useSelector } from "react-redux";
import styled from "styled-components";
import NavItem from "./navigationItem";

const mapState = ({headerProperties, websiteProperties}) => ({
    linksSpacing: headerProperties.linksSpacing,
    pages: websiteProperties.pages
})

const NavBarContainer = styled.div`
    display: flex;
    margin-left: 3vw;
`

const NavBar = ({linkColor}) => {
    const {linksSpacing, pages} = useSelector(mapState);

    return(
        <NavBarContainer>
            {pages.map(({label, link}, index) => (
                <NavItem label={label} key={index} spacing={linksSpacing} linkColor={linkColor} />
            ))}
        </NavBarContainer>
    )
}

export default NavBar;