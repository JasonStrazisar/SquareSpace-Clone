import headerIllustration from "../../assets/header.svg";
import leftLeft from "../../assets/left-left.png";
import leftRight from "../../assets/left-right.png";
import leftCenter from "../../assets/left-center.png";
import centered from "../../assets/center.png";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { setWebsiteName } from "../../redux/websiteProperties/websiteproperties.actions";
import { setHeaderDisplay, setHeaderFixed, setHeaderTheme, setHeaderTransparent } from "../../redux/header/headerproperties.actions";
const { default: styled } = require("styled-components");



const mapState = ({ websiteProperties, headerProperties, globalStyling }) => ({
    websiteName: websiteProperties.name,
    headerDisplay: headerProperties.display,
    headerTransparent: headerProperties.transparent,
    themes: globalStyling.themes,
    colors: globalStyling.colors,
    selectedTheme: headerProperties.theme,
    fixed: headerProperties.fixed
});

const ContentContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MenuLinkContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid grey;
    cursor: pointer;
    background: none;
    outline: none;
`
const Input = styled.input`
    width: 80%;
    border: none;
    color: rgb(14, 14, 14);
    font-size: 18px;
    outline: none;
    border-bottom: 1.5px solid rgb(110, 110, 110, 0.5);
    padding-bottom: 10px;

    &:focus {
        border-bottom: 1.5px solid rgb(110, 110, 110);
    }

    transition: border-bottom 0.4s 0s ease-out;
`
const Label = styled.label`
    color: rgb(110, 110, 110);
    width: 80%;
    padding: 10px 0;
    margin: 0;
    text-transform: uppercase;
    font-size: 13px;

`
const CustomRadioButton = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;
    [type=radio]{
        opacity: 0;
    }
    input + img {
        max-width: 95%;
        cursor: pointer;

    }
    input:checked + img {
        border: 1.5px solid black;
    }
`

const TitlePanel = () => {
    const dispatch = useDispatch();
    const {websiteName} = useSelector(mapState);

    const handleWebsiteNameChange = (e) => {
        dispatch(
            setWebsiteName(e.target.value)
        )
    }

    return (
        <ContentContainer>
            <Label>Website Name</Label>
            <Input value={websiteName} onChange={handleWebsiteNameChange} />
        </ContentContainer>
    )

}

const DispositionPanel = () => {
    const dispatch = useDispatch();
    const {headerDisplay, fixed} = useSelector(mapState);

    const handleHeaderDisplayChange = (e) => {
        dispatch(setHeaderDisplay(e.target.value))
    }

    const handleHeaderFixedChange = (e) => {
        dispatch(setHeaderFixed(!fixed))
    };

    return (
        <ContentContainer>
            <div style={{ marginTop: "10px", width: "80%", borderBottom: "solid 1px #6E6E6E" }}>
                <div onClick={handleHeaderFixedChange} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                    <p>Transparent</p>
                    <Switch checkedIcon={false} uncheckedIcon={false} checked={fixed} offColor="#6E6E6E" onColor="#000" />
                </div>
            </div>
            <CustomRadioButton>
                <label>
                    <input type="radio" value="left-left" checked={headerDisplay === "left-left"} onChange={handleHeaderDisplayChange}/>
                    <img alt="left-left Header" src={leftLeft} />
                </label>
            </CustomRadioButton>
            <CustomRadioButton>
                <label>
                    <input type="radio" value="left-between" checked={headerDisplay === "left-between"} onChange={handleHeaderDisplayChange} />
                    <img alt="left-right Header" src={leftRight} />
                </label>
            </CustomRadioButton>
            <CustomRadioButton>
                <label>
                    <input type="radio" value="left-center" checked={headerDisplay === "left-center"} onChange={handleHeaderDisplayChange} />
                    <img alt="left-center Header" src={leftCenter} />
                </label>
            </CustomRadioButton>
            <CustomRadioButton>
                <label>
                    <input type="radio" value="centered" checked={headerDisplay === "centered"} onChange={handleHeaderDisplayChange} />
                    <img alt="Centered Header" src={centered} />
                </label>
            </CustomRadioButton>
        </ContentContainer>
    )

}

const CouleurPanel = () => {

    const dispatch = useDispatch();
    const {headerTransparent, themes, colors, selectedTheme} = useSelector(mapState)

    const handleChangeTransparent = () => {
        dispatch(setHeaderTransparent(!headerTransparent))
    }

    const handleChangeTheme = (e) => {
        dispatch(setHeaderTheme(e.target.value));
    }

    return (
        <ContentContainer>
            <div style={{ marginTop: "10px", width: "80%", borderBottom: "solid 1px #6E6E6E"}}>
                <div onClick={handleChangeTransparent} style={{display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer"}}>
                    <p>Transparent</p>
                    <Switch checkedIcon={false} uncheckedIcon={false} checked={headerTransparent} offColor="#6E6E6E" onColor="#000" />
                </div>
            </div>
            {headerTransparent ? (
                <p style={{ width: "80%", fontSize: "15px", color: "rgb(110, 110, 110)", fontWeight: "400" }}>L’en-tête utilisera le thème de couleurs de la première section. Pour changer la couleur du titre du site et du lien de navigation, accédez à Design {`>`} Couleurs. Sélectionnez le thème de couleurs utilisé dans la première section, cliquez sur Avancé et modifiez le titre du site et la navigation</p>
            ) : (
                
                <div style={{width: "80%"}}>
                    <p style={{fontSize: "15px", color: "rgb(110, 110, 110)", fontWeight: "400" }}>Sélectionnez un thème pour l'en-tête. Pour changer les couleurs d'un thème, accédez à : Éditeur de thème.</p>
                    {themes.map(({name, primary, secondary, id}, index) => (
                        <CustomRadioButton key={index}>
                            <label>
                                <input type="radio" style={{width: "0px", height: "0px"}} checked={selectedTheme === id} value={id} onChange={handleChangeTheme} />
                                <div className="themeSelector" style={{ color: colors[secondary], background: colors[primary], border: `${selectedTheme === id ? "solid 2px black" : "solid 1px grey"}`, display: "flex", width: "100%", alignItems: "center", padding: "0 15px", borderRadius: "15px", cursor: "pointer" }}>
                                    <p style={{fontWeight: "900", fontSize: "22px", paddingRight: "25px", margin: "0"}}>Aa</p>
                                    <p style={{fontWeight: "700"}}>{name}</p>
                                </div>
                            </label>
                        </CustomRadioButton>
                    ))}
                </div>
            )}
            
           
        </ContentContainer>
    )
}

const GlobalPanel = ({changeActiveMenu}) => {

    return(
        <ContentContainer>
            <img src={headerIllustration} alt="" />
            <MenuLinkContainer onClick={() => changeActiveMenu("Title and logo")}>
                <p>Titre et logo du site</p>
                <i class="fas fa-chevron-right"></i>
            </MenuLinkContainer>
            <MenuLinkContainer onClick={() => changeActiveMenu("Disposition")}>
                <p>Disposition</p>
                <i class="fas fa-chevron-right"></i>
            </MenuLinkContainer>
            <MenuLinkContainer onClick={() => changeActiveMenu("Couleurs")}>
                <p>Couleurs</p>
                <i class="fas fa-chevron-right"></i>
            </MenuLinkContainer>
        </ContentContainer>
    )

}


const HeaderUpdatePanel = ({activeMenu, changeActiveMenu, name}) => {
    
    if(activeMenu === "global"){
        return(
            <GlobalPanel changeActiveMenu={(menu) => changeActiveMenu(menu)} name={name} />
        )
    }
    if (activeMenu === "Title and logo"){
        return(
            <TitlePanel />
        )
    }
    if (activeMenu === "Disposition"){
        return(
            <DispositionPanel />
        )
    }
    if(activeMenu === "Couleurs"){
        return(
            <CouleurPanel />
        )
    }
}

export default HeaderUpdatePanel;