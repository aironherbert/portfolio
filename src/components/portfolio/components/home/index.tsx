import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { HashLink } from "react-router-hash-link"

const Container = styled.div<{ isOnScreen?: boolean }>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    position: relative;

    background: linear-gradient(270deg, #103bc1, #838383);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 15s ease infinite;
    -moz-animation: AnimationName 15s ease infinite;
    animation: AnimationName 15s ease infinite;

    @-webkit-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @-moz-keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @keyframes AnimationName {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1em;
`

const SvgsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1em;
    margin-top: 1em;
`

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
`

const Card = styled.div`
    flex-grow: 0;
    overflow: visible;
    @media (max-width: 600px) {
        display: none;
    }
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;

    margin-bottom: 1em;
`

const GrowerText = styled.span`
    font-size: 1.2em;

    transition: 0.5s;
    &:hover {
        font-size: 1.2em;
        color: #6c73e1;

        transition: 0.5s;

        cursor: pointer;
    }
`
export default function Home() {
    return (
        <Container id="home">
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
                    <h2>Software Developer/Engineer</h2>
                    <SvgsContainer>
                        <a
                            href="https://www.linkedin.com/in/airon-herbert/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/svg/linkedin.svg"
                                }
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
                        Experience in <GrowerText>Web Development</GrowerText>{" "}
                        and
                        <GrowerText> Desktop Development</GrowerText>
                    </h3>
                    <h3 style={{ color: "white" }}>
                        Degree in{" "}
                        <GrowerText>
                            Control and Automation Engineering
                        </GrowerText>
                    </h3>
                    <h3 style={{ color: "white" }}>
                        Master's degree in{" "}
                        <GrowerText>
                            Technology of Sustainable Processes
                        </GrowerText>
                    </h3>
                </Card>
            </FlexContainer>
            <Buttons>
                <HashLink to="#projects" style={{ textDecoration: "none" }}>
                    <Button size="large" variant="contained" href="#projects">
                        See my projects
                    </Button>
                </HashLink>
                <HashLink to="#about" style={{ textDecoration: "none" }}>
                    <Button
                        size="large"
                        variant="contained"
                        href="#about"
                        color="success"
                        sx={{ fontWeight: 900 }}
                    >
                        More about me
                    </Button>
                </HashLink>
            </Buttons>
        </Container>
    )
}
