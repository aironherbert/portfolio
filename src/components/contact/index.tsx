import styled from "@emotion/styled";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  overflow: hidden;
  background-color: white;
`;

const Content = styled.div`
  flex: 1;
  height: calc(100% - 2em);
  margin: 4em 1em;
`;
export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID ?? "",
        process.env.REACT_APP_TEMPLATE_ID ?? "",
        form.current ?? "",
        process.env.REACT_APP_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container id="contact">
      <Content>
        <h1>Contact</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <label>
            Name <input type="text" name="name" />
          </label>

          <label>
            Email
            <input type="email" name="email" />
          </label>

          <label>
            Subject
            <input type="text" name="subject" />
          </label>

          <label>
            Message
            <textarea name="message" />
          </label>

          <input type="submit" value="Send" />
        </form>
      </Content>
    </Container>
  );
}
