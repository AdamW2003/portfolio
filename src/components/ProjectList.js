import React from 'react';
import { Box, Typography, Divider, useTheme, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectList = ({ projects }) => {
    const theme = useTheme();
    const dividerStyle = {
      margin: theme.spacing(3, 0),
      width: "90vw",
      margin: "auto",
    };
  
    return (
      <Box>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Divider style={dividerStyle} />}
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography>{project.description}</Typography>
            <Typography>
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

export default ProjectList