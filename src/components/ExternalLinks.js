import React from "react";
import { Typography, Grid, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTheme } from "@mui/system";

const ExternalLinks = ({ isMobile }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={isMobile ? 2 : 4}
      direction={isMobile ? "row" : "column"}
      justifyContent={isMobile ? "center" : "flex-start"} // Center horizontally on mobile
      alignItems={isMobile ? "center" : "flex-start"} // Center vertically on mobile
    >
      <Grid item xs={isMobile ? 4 : 12}>
        <Link
          href="https://www.linkedin.com/in/adamw3" // Include the protocol (e.g., https://)
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textAlign: "center", display: "block" }}
        >
          <LinkedInIcon sx={{ color: theme.palette.secondary.main }} />
        </Link>
      </Grid>

      <Grid item xs={isMobile ? 4 : 12}>
        <Link
          href="https://github.com/AdamW2003"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textAlign: "center", display: "block" }}
        >
          <GitHubIcon sx={{ color: theme.palette.secondary.main }} />
        </Link>
      </Grid>
      <Grid item xs={isMobile ? 4 : 12}>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textAlign: "center", display: "block" }}
        >
          <DescriptionIcon sx={{ color: theme.palette.secondary.main }} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default ExternalLinks;
