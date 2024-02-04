import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Profile from "../components/Profile";
import ExternalLinks from "../components/ExternalLinks";
import Portfolio from "../components/Portfolio";

const Dashboard = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

  return (
    <div sx={{backgroundColor: theme.palette.primary.main}}>
      <Container
        maxWidth="false"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 4,
          paddingBottom: 4,
        }}
      >
        <Grid container spacing={2} direction={isMobile ? "column" : "row"}>
          {/* Left section */}
          <Grid item xs={12} sm={6}>
            <Profile />
          </Grid>

          {/* Right section */}
          <Grid item xs={12} sm={6}>
            <ExternalLinks isMobile={isMobile} />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="false"
      >
        <Portfolio />
      </Container>
    </div>
  );
};

export default Dashboard;
