import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
`
const ButtonContainer = styled.div`
    flex: 1;
    display: flex;
`
const PublishButton = styled.button`
    background: none;
    border: none;
    text-transform: uppercase;
    font-weight: 800;
    color: #313131;
    padding: 0 25px;
    cursor: pointer;
    &:hover {
        background-color: #ededed;
        border-radius: 5px;
    }
    width: 33%;
`
const Vide = styled.div`
    width: 33%;
`
const PageTitle = styled.p`
    text-align: center;
    width: 33%;
`
const StudioHeader = ({name}) => {

    return(

        <HeaderContainer>
            <ButtonContainer>
                <PublishButton>
                    publier
                </PublishButton>
            </ButtonContainer>
                


            <PageTitle>
                {name}
            </PageTitle>

            <Vide />
        </HeaderContainer>

    )

}

export default StudioHeader;