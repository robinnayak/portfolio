import styled from "styled-components";

const Container = styled.footer`
    text-align:center;
    color:white;
    margin:0.3rem;
    padding:0.1rem;

`
function Footer() {
    return (
        <Container>
            © Copyright Sitename 2021. All Right Reserved
        </Container>
    )
}

export default Footer
