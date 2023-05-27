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

    background-image: ${() =>
        `url(${process.env.PUBLIC_URL}/svg/background.svg)`};
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
    color: black;
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
    padding: 0 4em 1em 4em;
`

const GrowerText = styled.span`
    font-size: 1.5em;
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
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: "white",
                                    padding: "5px",
                                    borderRadius: "5px",
                                }}
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
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: "white",
                                    padding: "5px",
                                    borderRadius: "5px",
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
                    <Button
                        size="large"
                        variant="contained"
                        href="#projects"
                        style={{ textAlign: "center" }}
                    >
                        See my projects
                    </Button>
                </HashLink>
                <HashLink
                    to="#about"
                    style={{ textDecoration: "none", textAlign: "center" }}
                >
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
