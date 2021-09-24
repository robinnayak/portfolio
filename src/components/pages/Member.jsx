import styled from "styled-components";
import Image from "../compo/Image";
import { person1 } from "../DataDetail";
const Container = styled.div`
  min-height: 70vh;
  margin: 0.5rem 3rem;
`;
const Title = styled.h2`
  text-align: center;
  color: white;
  font-family: "Grechen Fuemen", cursive;
  font-weight: bolder;
  cursor: default;
  font-size: 2rem;
`;
// display:gird;
// grid-template-column: repeat(1fr,3);
// grid-template-row:auto;
const ImageContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
justify-items: center;
align-items: center;
row-gap:2rem;
@media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);

  }
`

function Member() {
  return (
    <Container>
      <Title>Our Members</Title>
      <ImageContainer>
        {person1[0].OurMembers.map((member)=>(
          <Image key={member.name} name = {member.name} imageurl = {member.img} />
        ))}
        {/* <ImageBack imageurl={third}  /> */}
      </ImageContainer>
    </Container>
  );
}

export default Member;
