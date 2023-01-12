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

export default function SchoolRecordsTimeline({ style }: Proptypes) {
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
          <div>
            <div>Master in Technology of Sustainable Processes</div>
            <div style={{ fontSize: "11px", marginBottom: "5px" }}>
              2018 - 2021
            </div>
          </div>
        </TimelineContent>
      </TimelineItemStyled>
      <TimelineItemStyled>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div>Control and Automation Engineering</div>
          <div style={{ fontSize: "11px", marginBottom: "5px" }}>
            2012 - 2018
          </div>
        </TimelineContent>
      </TimelineItemStyled>
    </Timeline>
  );
}
