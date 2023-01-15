import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  & h1 {
    color: white;
  }
`;
export default function Projects() {
  return (
    <Container id="projects">
      <h1>Projects</h1>
    </Container>
  );
}
