import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  & h1 {
    color: white;
  }
`;
export default function Contact() {
  return (
    <Container id="contact">
      <h1>Contact</h1>
    </Container>
  );
}
