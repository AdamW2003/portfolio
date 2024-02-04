import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import Sidebar from "../components/SideBar";

const Content = () => {
  const theme = useTheme();

  return (
    <Sidebar />
  );
};

export default Content;
