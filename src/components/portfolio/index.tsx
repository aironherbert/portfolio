import styled from "@emotion/styled"
import { useEffect, useRef, useState } from "react"
import useOnScreen from "../../helpers/on-screen"
import About from "./components/about"
import Contact from "./components/contact"
import Home from "./components/home"
import Projects from "./components/projects"

import { HashLink } from "react-router-hash-link"
import { IconButton } from "@mui/material"
import { IconFlagBR, IconFlagUS } from "material-ui-flags"

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    scroll-behavior: smooth;
    overflow-x: hidden;
    position: relative;
`
const Header = styled.div<{ home?: boolean }>`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: end;
    padding: 10px;
    position: fixed;
    gap: 1em;
    z-index: 1;

    background-color: ${(props) => (props.home ? "transparent" : "#6c73e1")};
    transition: 0.25s linear;

    & a {
        text-decoration: none;
        font-size: 20px;
        color: ${(props) => (props.home ? "white" : "#000000")};

        &:hover {
            color: #1d2ae4;
        }
    }
`

const StyledLink = styled.div<{ isActive?: boolean; blackBorder?: boolean }>`
    border-bottom: ${(props) =>
        props.isActive
            ? `2px solid ${props.blackBorder ? "black" : "white"}`
            : "none"};
`

const FlagContainer = styled.div<{ isActive?: boolean }>`
    border: ${(props) =>
        props.isActive ? "2px solid blue" : "2px solid transparent"};
    transform: scale(${(props) => (props.isActive ? 1.2 : 1)});
    padding: 4px;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0);
    cursor: pointer;

    &:hover {
        border: 2px solid #1d2ae4;
    }

    &:active {
        border: 2px solid rgba(0, 0, 0, 0.5);
    }
`

export default function Portfolio() {
    const [loading, setLoading] = useState(true)
    const homeRef = useRef(null)
    const projectsRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const home = useOnScreen(homeRef)
    const projects = useOnScreen(projectsRef)
    const about = useOnScreen(aboutRef)
    const contact = useOnScreen(contactRef)

    const [leng, setLeng] = useState<"en" | "pt">("en")

    useEffect(() => {
        const onPageLoad = () => {
            setLoading(false)
        }

        if (document.readyState === "complete") {
            onPageLoad()
        } else {
            window.addEventListener("load", onPageLoad, false)
            return () => window.removeEventListener("load", onPageLoad)
        }
    }, [])
    return (
        <Page id="page" style={{ opacity: loading ? 0 : 1 }}>
            <Header id="header" style={{ zIndex: 100 }} home={home}>
                <div
                    style={{
                        display: "flex",
                        gap: "1em",
                        borderRadius: "10px",
                    }}
                >
                    <FlagContainer
                        isActive={leng === "en"}
                        onClick={() => setLeng("en")}
                    >
                        <IconButton sx={{ padding: 0 }}>
                            <IconFlagUS />
                        </IconButton>
                    </FlagContainer>
                    <FlagContainer
                        isActive={leng === "pt"}
                        onClick={() => setLeng("pt")}
                    >
                        <IconButton sx={{ padding: 0 }}>
                            <IconFlagBR />
                        </IconButton>
                    </FlagContainer>
                </div>

                <StyledLink isActive={home}>
                    <HashLink to="#home">Home</HashLink>
                </StyledLink>
                <StyledLink isActive={projects} blackBorder>
                    <HashLink to="#projects">Projects</HashLink>
                </StyledLink>
                <StyledLink isActive={about} blackBorder>
                    <HashLink to="#about">About</HashLink>
                </StyledLink>
                <StyledLink isActive={contact} blackBorder>
                    <HashLink to="#contact">Contact</HashLink>
                </StyledLink>
            </Header>
            <div style={{ display: "flex" }} ref={homeRef}>
                <Home />
            </div>
            <div style={{ display: "flex" }} ref={projectsRef}>
                <Projects />
            </div>
            <div style={{ display: "flex" }} ref={aboutRef}>
                <About />
            </div>
            <div style={{ display: "flex" }} ref={contactRef}>
                <Contact />
            </div>
        </Page>
    )
}
