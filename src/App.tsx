import styled from "@emotion/styled";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ProfessionalHistoryTimeline from "./components/timelines/professional-history";
import SchoolRecordsTimeline from "./components/timelines/school-records";
import { Tooltip } from "@mui/material";
import { useState } from "react";

const Wrapper = styled.div`
  background-color: #282828;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  color: white;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.5em;
  position: relative;
`;

const ToolBar = styled.div`
  background-color: #33393b;
  display: flex;
  color: white;
  gap: 1em;
  padding: 0.2em;
  padding-left: 0.5em;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ToolButtons = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  height: 100%;
  padding: 0.5em;
  background-color: #333333;
  overflow: auto;
`;

const ToolContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 270px;
  min-width: 270px;
  background-color: #252526;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  background-color: #1e1e1e;
`;

const ToolButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border-left: 2px solid #333333;
  color: #707070;

  &:hover {
    color: white;
  }
`;

export default function App() {
  const [selectedTool, setSelectedTool] = useState("school-records");
  return (
    <BrowserRouter basename="portfolio">
      <Wrapper>
        <Header>
          <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>
            Airon Herbert - Software Developer
          </div>
        </Header>
        <ToolBar>
          <div style={{ height: "1rem" }}></div>
        </ToolBar>
        <Body>
          <ToolButtons>
            <ToolButton
              to="/school-records"
              style={{
                borderLeft:
                  selectedTool === "school-records"
                    ? "2px solid white"
                    : "2px solid #333333",
              }}
              onClick={() => setSelectedTool("school-records")}
            >
              <Tooltip placement="right" title="School Records">
                <SchoolIcon fontSize="large" />
              </Tooltip>
            </ToolButton>
            <ToolButton
              to="/professional-history"
              style={{
                borderLeft:
                  selectedTool === "professional-history"
                    ? "2px solid white"
                    : "2px solid #333333",
              }}
              onClick={() => setSelectedTool("professional-history")}
            >
              <Tooltip placement="right" title="Professional History">
                <WorkHistoryIcon fontSize="large" />
              </Tooltip>
            </ToolButton>
            <ToolButton
              to="/skills"
              style={{
                borderLeft:
                  selectedTool === "skills"
                    ? "2px solid white"
                    : "2px solid #333333",
              }}
              onClick={() => setSelectedTool("skills")}
            >
              <Tooltip placement="right" title="Skills">
                <FitnessCenterIcon fontSize="large" />
              </Tooltip>
            </ToolButton>
            <ToolButton
              to="/contact"
              style={{
                borderLeft:
                  selectedTool === "contact"
                    ? "2px solid white"
                    : "2px solid #333333",
              }}
              onClick={() => setSelectedTool("contact")}
            >
              <Tooltip placement="right" title="Contact">
                <AlternateEmailIcon fontSize="large" />
              </Tooltip>
            </ToolButton>
          </ToolButtons>
          <Routes>
            <Route path="/">
              <Route index element={<div />} />
              <Route
                path="school-records"
                element={
                  <>
                    <ToolContent>
                      <SchoolRecordsTimeline
                        style={{ marginLeft: "20px", color: "white" }}
                      />
                    </ToolContent>
                    <WorkContainer />
                  </>
                }
              />
              <Route
                path="/professional-history"
                element={
                  <>
                    <ToolContent>
                      <ProfessionalHistoryTimeline
                        style={{ marginLeft: "20px", color: "white" }}
                      />
                    </ToolContent>
                    <WorkContainer />
                  </>
                }
              />
              <Route path="contact" element={<div>Contact</div>} />
              <Route path="*" element={<div></div>} />
            </Route>
          </Routes>
        </Body>
      </Wrapper>
    </BrowserRouter>
  );
}
