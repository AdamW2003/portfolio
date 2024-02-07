import React from "react";
import PortfolioSearch from "./PortfolioSearch";
import { Typography } from "@mui/material";

const Skills = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" sx={{ paddingBottom: 2 }}>
        Skills
      </Typography>
      <PortfolioSearch />
    </div>
  );
};

export default Skills;
