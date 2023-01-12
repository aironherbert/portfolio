import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

interface Proptypes {
  style?: React.CSSProperties;
}

export default function OppositeContentTimeline({ style }: Proptypes) {
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
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <div>Coleção.Moda</div>
            <div style={{ fontSize: "11px", marginBottom: "5px" }}>
              2021 - Now
            </div>
            <div style={{ fontSize: "12px" }}>Full Stack Developer</div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
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
      </TimelineItem>
      <TimelineItem>
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
      </TimelineItem>
      <TimelineItem>
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
      </TimelineItem>
    </Timeline>
  );
}
