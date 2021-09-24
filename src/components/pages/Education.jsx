import styled from "styled-components";
import education from "../../photos/education.svg";
import educationcap from "../../photos/educationcap.svg";
const Container = styled.div`
  min-height: 40vh;
  margin: 0.5rem 3rem;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h2`
  position: relative;
  top: -25px;
  color: white;
  font-family: "Roboto", sans-serif;
  cursor: default;
  font-weight: bolder;
  font-size: 2rem;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  background: url(${education});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Skilldetail = styled.div`
  width: 100%;
  margin: 1rem 0;
`;
// border:1px solid red;
const Detail = styled.div`
  margin:0.5rem 0rem;
  max-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;
const Name = styled.h3`
    position:relative;
    top:-15px;
  color: #fdfaba;
  flex: 1;
`;
const EducationIcon = styled.div`
display:inline-block;
position:relative;
top:15px;
left:-10px;
width: 50px;
height: 50px;
background: url(${educationcap});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
@media (max-width: 600px) {
  opacity:0;
}
`
// border:1px solid red;

const Percentage = styled.div`
  background:black;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 2;
  `;
  const Prgressbar = styled.div`
  height: 100%;
  background:${props=>props.colorname}
  `;
  
  const Number = styled.span`
  color: #fdfaba;
  font-weight: bolder;
  font-size:1rem;
  margin: 0rem 0.2rem;
`;



function Education({person2}) {
  return (
    <Container>
      <Title>
        {" "}
        <Icon></Icon> <Heading>Education</Heading>
      </Title>
      <Skilldetail>
        {person2.education.map(({boardname,percentage,color})=>(
        <Detail key={boardname}>
          <Name><EducationIcon />{boardname}</Name>
          <Percentage>
            <Prgressbar colorname={color} style={{width:percentage}}></Prgressbar>
            <Number>{percentage}</Number>
          </Percentage>
        </Detail>         
        ))}
      </Skilldetail>
    </Container>
  );
}

export default Education;
