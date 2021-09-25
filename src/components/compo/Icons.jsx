import styled, { keyframes } from "styled-components";

const flip = keyframes`
    0%{
        transform:rotateY(0deg);
    }
    50%{
        opacity:0;

    }
    
    100%{
        transform:rotateY(180deg);
        opacity:0;

    }
`;

const Container = styled.div`
    position:relative;
  background-color: white;
  min-width: 160px;
  min-height: 160px;

`;

const Icon = styled.div`
  margin: 1rem;
  width: 140px;
  height: 140px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:hover {
    animation: ${flip} 2s forwards;
  }
`;
const Hobbydesc = styled.div`
  position:absolute;
  top:60px;
  left:15px;
opacity:0;


`
function Icons({ urlsvg,hobbiedecs }) {
  return (
    <>
      <Container className="hobbycontainer">
        <Icon style={{ backgroundImage: `url(${urlsvg})` }}></Icon>
        <Hobbydesc className="hobbydesc">
            Desc: {hobbiedecs}
        </Hobbydesc>
      </Container>

    </>
  );
}

export default Icons;
