const NavItem = ({label, link, spacing, linkColor}) => {
    console.log(linkColor)
    return(
        <p style={{ margin: `0 ${spacing || 0}vw 0 0`, cursor: "pointer", fontSize: "1.2rem", color: `${linkColor}`}}>{label}</p>
    )
}

export default NavItem;