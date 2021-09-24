import styled from "styled-components";
import { Message, Email, ContactPhone } from "@material-ui/icons";

const Container = styled.div`
  position: relative;
  min-height: 70vh;
  background: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Redbox = styled.div`
  position: absolute;
  right: 0px;
  width: 15%;
  background: red;
  min-height: 70vh;
`;
const Contactdetail = styled.div`
  display: flex;
  margin-left: 3rem;

  width: 100%;
  height: 60vh;
`;
const Contacttext = styled.div`
  flex: 1.2;
`;

const Title = styled.h2``;
const Titlepara = styled.p`
  margin-left: 2rem;
`;
const Contacticon = styled.div`

  flex: 1;
  background: #00cfc1;
  z-index: 1;

`;

const Field = styled.div``;

const Input = styled.input.attrs({
  type: "submit",
  value: "submit",
})`
  width: 50%;
  height: 2rem;
  font-size: 1rem;
  opacity: 0.8;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    border: none;
    opacity: 1;
  }
`;
const IconMessage = styled.h4`
  font-weight: none;
`;
const Iconcontainer = styled.div`
  margin-top:2.4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`;
function Contact() {
  return (
    <Container>
      <Redbox></Redbox>
      <Contactdetail>
        <Contacttext>
          <Title>Contact Us</Title>
          <Titlepara>Contact with us via message at any time.</Titlepara>
          <Field>
            <form action="">
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your valid email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id=""
                  cols="33"
                  rows="10"
                  placeholder="Enter message"
                ></textarea>
              </div>
              <Input />
            </form>
          </Field>
        </Contacttext>
        <Contacticon>
          <Icons 
            decs="Message us 24hr service"
            iconurl={<Message style={{ fontSize: "2.5rem" }} />}
          />
          <Icons
            decs="Fax @ 00-12-123-1234"
            iconurl={<ContactPhone style={{ fontSize: "2.5rem" }} />}
          />
          <Icons
            decs="Email @ abc@gmail.com"
            iconurl={<Email style={{ fontSize: "2.5rem" }} />}
          />
        </Contacticon>
      </Contactdetail>
    </Container>
  );
}

const Icons = ({ decs, iconurl }) => {
  return (
    <Iconcontainer>
      {iconurl}
      <IconMessage>{decs}</IconMessage>
    </Iconcontainer>
  );
};

export default Contact;
