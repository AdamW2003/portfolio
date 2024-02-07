import React from 'react';
import TimelineData from '../modules/TimelineData.json'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Typography } from '@mui/material';

const DashboardTimeline = () => {
  return (
    <Timeline position="alternate">
      {TimelineData.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            {index !== TimelineData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">{item.title}</Typography>
            <Typography>{item.description1}</Typography>
            {item.description2 && <Typography variant="body2">{item.description2}</Typography>}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default DashboardTimeline;
