import React from "react";
import { Typography } from "@mui/material";
import SkillsPortfolio from "./SkillsPortfolio";

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
      <SkillsPortfolio />
    </div>
  );
};

export default Skills;
