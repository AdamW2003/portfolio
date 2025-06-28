import React from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from 'framer-motion';
import Profile from "../components/Profile";
import ExternalLinks from "../components/ExternalLinks";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import DashboardTimeline from "../components/DashboardTimeline";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const Dashboard = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      <Container
        maxWidth="false"
        sx={{
          position: 'relative',
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 4,
          paddingBottom: 4,
          padding: 0,
        }}
      >
        <Grid container spacing={2} direction={isMobile ? "column" : "row"}>
          <Grid item xs={12} sm={6}>
            <Profile isMobile={isMobile} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ExternalLinks isMobile={isMobile} />
          </Grid>
        </Grid>
        <Box
          onClick={handleScrollDown}
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: `${bounce} 2s infinite`,
            color: theme.palette.secondary.main,
            cursor: 'pointer',
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
        </Box>
      </Container>
      
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <DashboardTimeline />
        </motion.div>
      </Container>

      <Container maxWidth="false">
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Portfolio />
        </motion.div>
      </Container>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.div>
      </Container>
    </Box>
  );
};

export default Dashboard;