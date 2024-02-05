import React from 'react';
import { Box, Typography, Divider, useTheme, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectList = ({ projects }) => {
  const theme = useTheme();
  const containerStyle = {
    width: "100%",
    margin: "auto",
  };

  return (
    <Box style={containerStyle}>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Divider sx={{ width: "100%" }} />} {/* Set the Divider width to 100% */}
          <Typography variant="h5" component="div" sx={{ width: "100%" }}>
            {project.title}
          </Typography>
          <Typography sx={{ width: "100%" }}>{project.description}</Typography>
          <Typography sx={{ width: "100%" }}>
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "black",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <GitHubIcon
                sx={{ color: theme.palette.secondary.main, marginRight: "4px" }}
              />
              Github
            </Link>
          </Typography>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ProjectList;
