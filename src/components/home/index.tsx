import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min.js";

const Container = styled.div<{ isOnScreen?: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
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
  justify-content: left;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  overflow: hidden;
  position: relative;
  margin-bottom: 1em;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card = styled.div`
  flex-grow: 0;
  overflow: visible;
  @media (max-width: 600px) {
    display: none;
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

const GrowerText = styled.span`
  font-size: 1.2em;

  transition: 0.5s;
  &:hover {
    font-size: 1.2em;
    color: #6c73e1;

    transition: 0.5s;

    cursor: pointer;
  }
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
          maxDistance: 20.0,
          spacing: 20.0,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <Container ref={myRef} id="home">
      <FlexContainer>
        <div style={{ zIndex: 1, color: "white", marginLeft: "1em" }}>
          <ImageContainer>
            <img
              src={process.env.PUBLIC_URL + "/profile.jpg"}
              alt="me riding a bike"
            />
          </ImageContainer>
          <h3>Hello! My name is</h3>
          <h1>Airon Herbert</h1>
          <h2>and I'm a Software Engineer</h2>
          <SvgsContainer>
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
            <a
              href="https://github.com/aironherbert"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + "/svg/github.svg"}
                alt="github"
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </a>
          </SvgsContainer>
        </div>
        <Card>
          <h3 style={{ color: "white" }}>
            Experience in <GrowerText>Web Development</GrowerText> and
            <GrowerText> Desktop Development</GrowerText>
          </h3>
          <h3 style={{ color: "white" }}>
            Degree in{" "}
            <GrowerText>Control and Automation Engineering</GrowerText>
          </h3>
          <h3 style={{ color: "white" }}>
            Master's degree in{" "}
            <GrowerText>Technology of Sustainable Processes</GrowerText>
          </h3>
        </Card>
      </FlexContainer>
      <Buttons>
        <Button size="large" variant="contained" href="#projects">
          See my projects
        </Button>
        <Button
          size="large"
          variant="outlined"
          href="#about"
          color="info"
          sx={{ fontWeight: 900 }}
        >
          More about me
        </Button>
      </Buttons>
    </Container>
  );
}
