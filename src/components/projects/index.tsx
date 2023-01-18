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

export default function Projects() {
  return (
    <Container id="projects">
      <Content>
        <h1>My projects</h1>
      </Content>
    </Container>
  );
}
