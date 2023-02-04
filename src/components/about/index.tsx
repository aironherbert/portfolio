import styled from "@emotion/styled";
import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  flex: 1;
  height: calc(100% - 2em);
  margin: 4em 1em;
  background-color: #f5f5f5;

  & > p {
    font-size: 1.2em;
    text-align: justify;
    min-width: 200px;
  }
`;

const ImageContainer = styled.div`
  width: 320px;
  height: 320px;
  overflow: hidden;
  float: left;

  @media (max-width: 600px) {
    float: none;
    margin: 0 auto;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    scale: 2.2;
    padding-right: 100px;
  }
`;
export default function About() {
  return (
    <Container id="about">
      <Content>
        <h1>About me</h1>
        <ImageContainer>
          <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="profile" />
        </ImageContainer>
        <p>
          I am a software developer with a passion for learning and creating
          software. I have a Bachelor's degree in Control and Automation
          Engineering. I have a Master's degree in Techonology of Sustentable
          Processes. I have experience in web development and desktop
          development. I am currently working as a full stack developer at a
          startup in Florianópolis, SC, Brazil, where I currently live.
        </p>
        <p>
          I am a self-taught programmer. In college I learned the fundamentals
          of Computer Science and programming languages such as C, C++, Java,
          and SQL. I learned Python, and for my final papers, I also learned
          Matlab on my own. Those works resulted in three desktop softwares that
          were registered. So after graduation from my masters I started
          learning web development. I learned HTML, CSS and JavaScript on my
          own.
        </p>

        <p>
          I found that I really enjoyed web development, so I started learning
          Django, React and Ruby on Rails on my own. I participated in an
          educational program for Full Stack Developer beginners called Hiring
          Coders in which I was a finalist, one of 300 out of 10,000 parcipants.
          But it wasn't until I started working at my current job that I
          deepened into React and also learned Elixir. Since then I've been
          working with React and Elixir for personal and work projects.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            bottom: 0,
            marginBottom: "1em",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<DescriptionIcon />}
          >
            See my curriculum
          </Button>
        </div>
      </Content>
    </Container>
  );
}
