import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    margin:0.5rem 1rem;
    text-align:center;
    &hover,Line{
        opacity:100;
    }
`


function Navlinks({linkname,linkurl}) {
    return (
        <Container className="navlink">
            <Link className="link" to={linkurl} >{linkname}</Link>            
            <div className="line"></div>
        </Container>
    )
}

export default Navlinks
