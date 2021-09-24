import styled from "styled-components";

const Container = styled.div`
  margin: 0.5rem 3rem;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Skill = styled.div`
  color: white;
  font-family: "Grechen Fuemen", cursive;
  cursor: default;
  font-weight: bold;
  font-size: 2rem;
`;
const Line = styled.div`
  background: white;
  height: 1px;
  width: 16%;
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
  color: #fdfaba;
  flex: 1;
`;
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

function Skills({person2}) {
  return (
    <Container>
      <Skill>Skills</Skill>
      <Line></Line>
      <Skilldetail>
        {person2.Skills.map(({name,percentage})=>(
        <Detail key={name}>
          <Name>{name}</Name>
          <Percentage>
            <Prgressbar colorname="#fef47c" style={{width:percentage}}></Prgressbar>
            <Number>{percentage}</Number>
          </Percentage>
        </Detail>         
        ))}
      </Skilldetail>
    </Container>
  );
}

export default Skills;
