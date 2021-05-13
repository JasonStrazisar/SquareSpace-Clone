
import HeaderUpdatePanel from "../../../components/header/headerUpdatePanel";
import { useRef } from "react";
import styled from "styled-components";
import PanelHeader from "./pannelHeader";
import { useState } from "react";


const PanelContainer = styled.div`
    display: ${props => props.active ? "block" : "none"};
    position: fixed;
    top: 200px;
    right: 50px;
    background: #fff;
    width: 320px;
    height: 200px;
    user-select: none;
    z-index: 5000;
    height: 476px;
    border-radius: 10px;
    box-shadow: 0px 0px 74px -9px rgba(0,0,0,0.27);
`

const Panel = ({isActive, name}) => {
    const [activeMenu, setActiveMenu] = useState("global");
    const panelRef = useRef(null);


    const handleDrag = (movementX, movementY) => {
        const panel = panelRef.current;
        if(!panel) return;

        const {x, y} = panel.getBoundingClientRect();

        panel.style.left = `${x + movementX}px`;
        panel.style.top = `${y + movementY}px`;
    };

    return(
        <PanelContainer ref={panelRef} active={isActive}>
            <PanelHeader onDrag={handleDrag} activeMenu={activeMenu} goBack={() => setActiveMenu("global")} />
            <HeaderUpdatePanel activeMenu={activeMenu} changeActiveMenu={(e) => setActiveMenu(e)} name={name} />
        </PanelContainer>
    )

}

export default Panel;

