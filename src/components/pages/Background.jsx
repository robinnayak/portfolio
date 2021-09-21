// import { Container } from "@material-ui/core";
import styled from "styled-components";
import { person1 } from "../DataDetail";

const Container = styled.div`
    margin:0.5rem 3rem;
    min-height:80vh;
    background:${person1[0].background};
   
`

function Background() {
    return (
        <Container>
            <h1>{person1[0].Name}</h1>
            <h1>{person1[0].Status}</h1>
            
        </Container>
    )
}

export default Background
