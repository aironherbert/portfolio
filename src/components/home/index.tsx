import styled from "@emotion/styled";
import { Button, Card, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min.js";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 0 1em;
  position: relative;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
`;

const SvgsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin-bottom: 1em;
  & img {
    position: absolute;
    top: -120px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const StyledList = styled.ul`
  padding: 0;

  & li {
    list-style: square;
    color: white;
    font-size: 18px;
    margin-bottom: 0.5em;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  position: absolute;
  bottom: 0;
  margin-bottom: 1em;
`;
export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6c73e1,
          points: 15.0,
          maxDistance: 40.0,
          spacing: 20.0,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <Container ref={myRef} id="home">
      <FlexContainer>
        <div style={{ zIndex: 1, color: "white" }}>
          <h3>Hello! My name is</h3>
          <h1>Airon Herbert</h1>
          <h2>and I'm a Software Engineer</h2>
        </div>
        <Card
          sx={{
            maxWidth: 345,
            marginTop: "1em",
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "visible",
          }}
        >
          <ImageContainer>
            <img
              src={process.env.PUBLIC_URL + "/profile.jpg"}
              alt="me riding a bike"
            />
          </ImageContainer>
          <StyledList>
            <li>Currently working as a Full Stack Developer</li>
            <li>Experience in web development and desktop development</li>
            <li>Degree in Control and Automation Engineering</li>
            <li>Master's degree in Technology of Sustainable Processes</li>
            <li>Currently living in Florianópolis, SC, Brazil</li>
          </StyledList>
          <SvgsContainer>
            <a
              href="https://github.com/aironherbert"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/svg/github.svg"}
                alt="github"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/airon-herbert/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/svg/linkedin.svg"}
                alt="github"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </SvgsContainer>
        </Card>
      </FlexContainer>
      <Buttons>
        <Button size="large" variant="contained" href="#projects">
          See my projects
        </Button>
        <Button size="large" variant="outlined" href="#about">
          More about me
        </Button>
      </Buttons>
    </Container>
  );
}
