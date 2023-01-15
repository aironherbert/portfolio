import styled from "@emotion/styled";
import { Link } from "@mui/material";
import About from "./components/about";
import Contact from "./components/contact";
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
export default function App() {
  return (
    <Page>
      <Header>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </Header>
      <Home />
      <Projects />
      <About />
      <Contact />
    </Page>
  );
}
