import styled from "styled-components";

const Container = styled.div`
background-color:white;
min-width:160px;
min-height:160px;

`
const Icon = styled.div`
margin:1rem;
width:140px;
height:140px;
background-repeat:no-repeat;
background-position:center;
background-size:cover;
`
function Icons({urlsvg}) {
    return (
        <Container  >
            <Icon style={{backgroundImage:`url(${urlsvg})`}}>

            </Icon>
        </Container>
    )
}

export default Icons
