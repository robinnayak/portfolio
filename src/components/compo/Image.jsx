import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.imageurl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Name = styled.h5`
  opacity:0;
`

function Image({ name, imageurl }) {
  return (
    <Container imageurl={imageurl}>
      <Name>{name}</Name>
    </Container>
  );
}

export default Image;
