import { useEffect, useState } from "react";
import styled from "styled-components";

const BackButton = styled.button`
    background: none;
    border: none;
    outline: none;
    font-weight: 900;
    cursor: pointer;
    padding: 10px;
    &:hover {
        background-color: #ededed;
        border-radius: 5px;
    }
    i {
        margin-right: 15px;
    }
`

const PanelHeader = ({onDrag, activeMenu, goBack}) => {

    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.addEventListener('mouseup', handleMouseUp);
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {onDrag(e.movementX, e.movementY)};

        if(mouseDown){
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [mouseDown, onDrag]);

    const handleMouseDown = () => setMouseDown(true);

    return(
        <div onMouseDown={handleMouseDown} style={{height: "50px", boxShadow: "inset 0 -1px 0 0 #e7e7e7", display: "flex", alignItems: "center", justifyContent: "space-around", cursor: "pointer"}}>
            {activeMenu === "global" ? (
                <p>Header</p>
            ) : (
                <div style={{display: "flex", justifyContent: "space-around", width: "100%", alignItems: "center"}}>
                    <BackButton onClick={goBack}>
                        <i class="fas fa-chevron-left"></i>
                        Retour
                    </BackButton>
                    {activeMenu}
                </div>
            )}
        </div>
    )

}

export default PanelHeader;