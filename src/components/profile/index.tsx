import styled from "@emotion/styled";
import { Hidden, Paper } from "@mui/material";

const Container = styled.div`
  flex: 1;
  padding: 20px 50px;
  overflow: auto;
  color: white;
  font-size: 20px;

  & p {
    text-align: justify;
  }
`;

const ImageContainer = styled.div`
  width: 320px;
  height: 320px;
  overflow: hidden;
  float: left;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    scale: 2.2;
    padding-right: 100px;
  }
`;
export default function Profile() {
  return (
    <Container>
      <Paper
        style={{
          overflow: "hidden",
          color: "white",
          backgroundColor: "#33393b",
          marginBottom: "1em",
          paddingRight: "1em",
        }}
      >
        <ImageContainer>
          <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="profile" />
        </ImageContainer>
        <p>Hello! My name is</p>
        <h1>Airon Herbert</h1>
        <p>
          I am a software developer with a passion for learning and creating
          software. I have a Bachelor's degree in Control and Automation
          Engineering. I have a Master's degree in Techonology of Sustentable
          Processes. I have experience in web development and desktop
          development. I am currently working as a full stack developer at a
          startup in Florianópolis, SC, Brazil, where I currently live.
        </p>
      </Paper>
    </Container>
  );
}
