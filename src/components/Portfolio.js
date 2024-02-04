import React from "react";
import { Card, CardContent, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1.",
    },
    {
      title: "Project 2",
      description: "Description for Project 2.",
    },
    {
      title: "Project 3",
      description: "Description for Project 3.",
    },
    {
      title: "Project 4",
      description: "Description for Project 4.",
    },
  ];

  const cardContainerStyle = {
    padding: theme.spacing(2),
    margin: 'auto',
    width: isMobile ? '98%' : '98%', // Adjust as needed
  };

  const cardStyle = {
    backgroundColor: theme.palette.tertiary.main,
    color: "black",
  };

  const dividerStyle = {
    margin: theme.spacing(3, 0),
    width: '90vw',
    margin: 'auto',
  };

  return (
    <div>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          {/* <div style={cardContainerStyle}>
            <Card style={cardStyle}>
              <CardContent> */}
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography color="text.secondary">{project.description}</Typography>
              {/* </CardContent>
            </Card>
          </div> */}
          {index < projects.length - 1 && <Divider style={dividerStyle} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Portfolio;
