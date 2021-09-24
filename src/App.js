import { Home, Facebook, Twitter, YouTube, Telegram } from "@material-ui/icons";
import styled, { keyframes } from "styled-components";
import Background from "./components/pages/Background";
import Contact from "./components/pages/Contact";
import Education from "./components/pages/Education";
import Footer from "./components/pages/Footer";
import Hobbies from "./components/pages/Hobbies";
import Member from "./components/pages/Member";
import Navbar from "./components/pages/Navbar";
import Skills from "./components/pages/Skills";
import "./components/style.css";
const Container = styled.div`
  background-color: black;
  color: white;
  height: 40px;
`;
const Headerbox = styled.div`
  margin: 0px 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const Logo = styled.div`
  font-family: "Grechen Fuemen", cursive;
  font-weight: bold;
  flex: 2;
  cursor: pointer;

  @media (max-width: 600px) {
    flex: 0;
  }
`;
const Icons = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex: 1;
  }
`;
const up = keyframes`
0%{
  transform:translateY(0px);
}
50%{
  transform:translateY(-4px);
}
100%{
  transform:translateY(0px);
}
`;
// transition : all 0.3s;
const Medialinks = styled.span`
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    color: #7a9f82;
    animation: ${up} 0.5s linear infinite;
  }
`;
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Background />
      <Skills />
      <Hobbies />
      <Education />
      <Member/>
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <Container>
      <Headerbox>
        <Logo>Portfolio</Logo>
        <Icons>
          <Medialinks>
            {" "}
            <Home />{" "}
          </Medialinks>

          <Medialinks>
            {" "}
            <Facebook />{" "}
          </Medialinks>
          <Medialinks>
            {" "}
            <Twitter />{" "}
          </Medialinks>
          <Medialinks>
            {" "}
            <YouTube />{" "}
          </Medialinks>
          <Medialinks>
            {" "}
            <Telegram />{" "}
          </Medialinks>
        </Icons>
      </Headerbox>
    </Container>
  );
}

export default App;
