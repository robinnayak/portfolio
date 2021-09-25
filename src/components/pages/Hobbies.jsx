import styled from "styled-components";
import { ArrowRightAlt } from "@material-ui/icons";
import Icons from "../compo/Icons";


const Container = styled.div`
  min-height: 70vh;
  margin: 0.5rem 3rem;
`;
//   border:1px solid red;


const Hobbie = styled.div`
  text-align: center;
  color: white;
  font-family: "Grey Qo", cursive;
  font-weight: bolder;
  cursor: default;
  font-size: 3rem;
`;
// position:absolute;
const Arrow = styled.span`
  position: relative;
  top: 15px;
`;

// border:1px solid red;
const Hobbyarea = styled.div`
  min-height: 65vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  column-gap:1rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    row-gap:1rem;
  }
`;
function Hobbies({person2}) {
  return (
    <Container>
      <Hobbie>
        Hobby{" "}
        <Arrow>
          <ArrowRightAlt />
        </Arrow>
      </Hobbie>
      <Hobbyarea>
        {person2.url.map(({svg,hobbiedecs})=>(
            <Icons key={svg} urlsvg = {svg} hobbiedecs={hobbiedecs} />
        ))}
      </Hobbyarea>
    </Container>
  );
}

export default Hobbies;
