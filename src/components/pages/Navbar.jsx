import styled from "styled-components";
import Navlinks from "../compo/Navlinks";

const Container = styled.div`
    display:flex;
    justify-content:center;
`

function Navbar() {
    return (
        <Container>
            <Navlinks linkname = "Home" linkurl = "/" />
            <Navlinks linkname = "Profile" linkurl = "/"/>
            <Navlinks linkname = "Contact" linkurl = "/"/>
            <Navlinks linkname = "Skills" linkurl = "/"/>
        </Container>
    )
}

export default Navbar
