import { useState } from "react"

const UpdateHoverButton = ({openPanel}) => {
    const [isHovered, setIsHovered] = useState(true);



    return(

        <div style={{ width: "100vw", height: "100%", position: "absolute", top: "0", left: "0", zIndex: "1000" }} onMouseEnter={e => setIsHovered(true)} onMouseLeave={e => setIsHovered(false)} onClick={openPanel}>
            {isHovered ? (
                <div style={{ background: "rgba(0, 0, 0, 0.5)", width: "100%", height: "100%", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{background: "#fff", width: "10%", height: "60%", display: "flex", alignItems: "center", justifyContent: "center", textTransform: "uppercase"}}>
                        <p>Edit Header</p>
                    </div>
                </div>
            ) : ""}


            
        </div>

    )


}

export default UpdateHoverButton;