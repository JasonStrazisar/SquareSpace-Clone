import { useState } from "react";
import usePortal from "react-useportal";
import Panel from "./editPannel";

const PanelPortal = (...props) => {

    const { Portal } = usePortal({
        bindTo: document.getElementById('panel-portal'),
    });

    

    

    return (
        <Portal ref={node}>
            <Panel {...props}/>
        </Portal>
    )
}

export default PanelPortal;