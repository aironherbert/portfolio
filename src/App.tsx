import styled from "@emotion/styled";
import { useRef } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import useOnScreen from "./components/helpers/on-screen";
import Home from "./components/home";
import Projects from "./components/projects";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;
  overflow-x: hidden;
  position: relative;
`;
const Header = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: end;
  padding: 10px;
  position: fixed;
  gap: 1em;
  z-index: 1;

  & a {
    text-decoration: none;
    font-size: 20px;
    color: #838282;

    &:hover {
      color: #6c73e1;
    }
  }
`;

const StyledLink = styled.a<{ isActive?: boolean }>`
  border-bottom: ${(props) => (props.isActive ? "1px solid white" : "none")};
`;
export default function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const home = useOnScreen(homeRef);
  const projects = useOnScreen(projectsRef);
  const about = useOnScreen(aboutRef);
  const contact = useOnScreen(contactRef);

  return (
    <Page id="page">
      <Header>
        <StyledLink href="#home" isActive={home}>
          Home
        </StyledLink>
        <StyledLink href="#projects" isActive={projects}>
          Projects
        </StyledLink>
        <StyledLink href="#about" isActive={about}>
          About
        </StyledLink>
        <StyledLink href="#contact" isActive={contact}>
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
  );
}
