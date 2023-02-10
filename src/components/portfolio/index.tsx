import styled from "@emotion/styled"
import { useEffect, useRef, useState } from "react"
import useOnScreen from "../../helpers/on-screen"
import About from "./components/about"
import Contact from "./components/contact"
import Home from "./components/home"
import Projects from "./components/projects"

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

const StyledLink = styled.a<{ isActive?: boolean; blackBorder?: boolean }>`
    border-bottom: ${(props) =>
        props.isActive
            ? `2px solid ${props.blackBorder ? "black" : "white"}`
            : "none"};
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
            <Header style={{ zIndex: 100 }} home={home}>
                <StyledLink href="#home" isActive={home}>
                    Home
                </StyledLink>
                <StyledLink href="#projects" isActive={projects} blackBorder>
                    Projects
                </StyledLink>
                <StyledLink href="#about" isActive={about} blackBorder>
                    About
                </StyledLink>
                <StyledLink href="#contact" isActive={contact} blackBorder>
                    Contact
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
