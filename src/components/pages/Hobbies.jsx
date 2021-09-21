import styled from "styled-components";
import { ArrowRightAlt } from "@material-ui/icons";
import Icons from "../compo/Icons";
import { person1 } from "../DataDetail";


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
  cursor: pointer;
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
`;
function Hobbies() {
  return (
    <Container>
      <Hobbie>
        Hobby{" "}
        <Arrow>
          <ArrowRightAlt />
        </Arrow>
      </Hobbie>
      <Hobbyarea>
        {person1[0].url.map(({svg})=>(
            <Icons urlsvg = {svg} />
        ))}

        {/* <Icons />
        <Icons />
        <Icons />
        <Icons />
        <Icons /> */}
      </Hobbyarea>
    </Container>
  );
}

export default Hobbies;