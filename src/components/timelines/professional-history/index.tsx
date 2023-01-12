import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styled from "@emotion/styled";

interface Proptypes {
  style?: React.CSSProperties;
}

const TimelineItemStyled = styled(TimelineItem)`
  color: #b4b4b4;

  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export default function ProfessionalHistoryTimeline({ style }: Proptypes) {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        ...style,
      }}
    >
      <TimelineItemStyled>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>Coleção.Moda</div>
          <div style={{ fontSize: "11px", marginBottom: "5px" }}>
            2021 - Now
          </div>
          <div style={{ fontSize: "12px" }}>Full Stack Developer</div>
        </TimelineContent>
      </TimelineItemStyled>
      <TimelineItemStyled>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>IFG - Câmpus Goiânia</div>
          <div style={{ fontSize: "11px", marginBottom: "5px" }}>
            2018 - 2021
          </div>
          <div style={{ fontSize: "12px" }}>Scientific Researcher</div>
        </TimelineContent>
      </TimelineItemStyled>
      <TimelineItemStyled>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>IFG - Câmpus Goiânia</div>
          <div style={{ fontSize: "11px", marginBottom: "5px" }}>
            Jan. 2018 - Aug. 2018
          </div>
          <div style={{ fontSize: "12px" }}>Monitor</div>
        </TimelineContent>
      </TimelineItemStyled>
      <TimelineItemStyled>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div>IFG - Câmpus Goiânia</div>
          <div style={{ fontSize: "11px", marginBottom: "5px" }}>
            May 2017 - Sept. 2017
          </div>
          <div style={{ fontSize: "12px" }}>Intern</div>
        </TimelineContent>
      </TimelineItemStyled>
    </Timeline>
  );
}
