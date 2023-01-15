import styled from "@emotion/styled";
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
  const home = useOnScreen("home");
  const projects = useOnScreen("projects");
  const about = useOnScreen("about");
  const contact = useOnScreen("contact");

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
      <Home />
      <Projects />
      <About />
      <Contact />
    </Page>
  );
}
