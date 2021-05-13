const Section = ({children, text, background}) => {

    return(
        <div>
            <p>{text}</p>
            {children}
        </div>
    )

}

export default Section