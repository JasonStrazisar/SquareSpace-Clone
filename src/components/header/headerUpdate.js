import { useState } from "react"
import styled from "styled-components";

const HoverContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    
`

const ButtonContainer = styled.div`
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.opacity};
    padding: 1.5vw 0;
`

const UpdateHoverButton = ({openPanel}) => {
    const [isHovered, setIsHovered] = useState(true);
    return(

        <HoverContainer onMouseEnter={e => setIsHovered(true)} onMouseLeave={e => setIsHovered(false)} onClick={openPanel}>

            <ButtonContainer opacity={isHovered ? "1" : "0"}>
                <div style={{background: "#fff", width: "10%", height: "60%", display: "flex", alignItems: "center", justifyContent: "center", textTransform: "uppercase"}}>
                    <p>Edit Header</p>
                </div>
            </ButtonContainer>

        </HoverContainer>

    )


}

export default UpdateHoverButton;