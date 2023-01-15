import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  & h1 {
    color: white;
  }
`;
export default function About() {
  return (
    <Container id="about">
      <h1>About</h1>
    </Container>
  );
}
