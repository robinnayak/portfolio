import styled from "styled-components";
const Container = styled.div`
  position:relative;
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.imageurl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity:0.8;
`;

const Name = styled.span`
font-size:1rem;
cursor:default;
width:100%;
color:white;
position:absolute;
bottom:-30px;
  text-align:center;
  opacity:0;

`

function Image({ name, imageurl,ifclick,perindex }) {
  // console.log(ifclick());
  // console.log(perindex);
  return (
    <Container onClick={()=>ifclick(perindex)} className="member" imageurl={imageurl}>
      <Name className="membername">{name}</Name>
    </Container>
  );
}

export default Image;
