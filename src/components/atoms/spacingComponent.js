const { default: styled } = require("styled-components")

const Spacing = styled.div`

    width: 100%;
    height: ${props => props.spacingSize}

`

const SpacingComponent = ({spacingSize}) => {

    return(
        <Spacing spacingSize={spacingSize} />
    )

}

export default SpacingComponent;