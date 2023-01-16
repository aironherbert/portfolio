import styled from "@emotion/styled";

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
  return (
    <Container id="contact">
      <Content>
        <h1>Contact</h1>
      </Content>
    </Container>
  );
}
