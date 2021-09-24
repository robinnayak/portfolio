// import { Container } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
    margin:0.5rem 3rem;
    min-height:80vh;
    background : ${props=>props.background}
    `
    // background:${person1[0].background};

function Background({person2}) {
    return (
        <Container background={person2.background} >
            <h1>{person2.Name}</h1>
            <h1>{person2.Status}</h1>
            
        </Container>
    )
}

export default Background
