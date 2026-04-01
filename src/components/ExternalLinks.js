import React from "react";
import { Typography, Grid, Link, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";
import { useTheme } from "@mui/system";

const ExternalLinks = ({ isMobile }) => {
  const theme = useTheme();

  const scrollToBlog = (e) => {
    e.preventDefault();
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Grid
      container
      spacing={isMobile ? 2 : 4}
      direction={isMobile ? "row" : "column"}
      justifyContent={isMobile ? "center" : "flex-start"}
      alignItems={isMobile ? "center" : "flex-start"}
    >
      <Grid item xs={isMobile ? 3 : 12}>
        <Link
          href="https://www.linkedin.com/in/adamw3"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textAlign: "center", display: "block" }}
        >
          <LinkedInIcon sx={{ color: theme.palette.secondary.main }} />
        </Link>
      </Grid>

      <Grid item xs={isMobile ? 3 : 12}>
        <Link
          href="https://github.com/AdamW2003"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textAlign: "center", display: "block" }}
        >
          <GitHubIcon sx={{ color: theme.palette.secondary.main }} />
        </Link>
      </Grid>
      <Grid item xs={isMobile ? 3 : 12}>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textAlign: "center", display: "block" }}
        >
          <DescriptionIcon sx={{ color: theme.palette.secondary.main }} />
        </Link>
      </Grid>
      <Grid item xs={isMobile ? 3 : 12}>
        <Link
          href="#blog"
          onClick={scrollToBlog}
          sx={{ textAlign: "center", display: "block", cursor: 'pointer' }}
        >
          <ArticleIcon sx={{ color: theme.palette.secondary.main }} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default ExternalLinks;
