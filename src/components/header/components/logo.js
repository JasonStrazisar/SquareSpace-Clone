const { useSelector } = require("react-redux");
const { default: styled } = require("styled-components");

const mapState = ({websiteProperties}) => ({
    webisteName: websiteProperties.name,
    websiteLogo: websiteProperties.logo
});

const Name = styled.h5`
    margin: 0;
    font-size: 2rem;
    color: ${props => props.logoColor};
    text-align: center
`

const Logo = styled.img`
`

const LogoComponent = ({titleColor}) => {
    const {websiteLogo, webisteName} = useSelector(mapState)

    return(
        <>
        {websiteLogo ? (
            <Logo src={websiteLogo} />
        ) : (
            <Name logoColor={titleColor} >{webisteName}</Name>
        )}
        </>
    )

}

export default LogoComponent