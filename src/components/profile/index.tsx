import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
  white-space: "pre-line";
  padding: 0 50px;
  overflow: auto;
  color: white;

  & > h1 {
    white-space: pre-line;
  }
`;
export default function Profile() {
  return (
    <Container>
      <h1>Profile</h1>
    </Container>
  );
}
