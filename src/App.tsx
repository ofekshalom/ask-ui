import { useEffect, useState } from "react";
import axios from "axios";
import AskQuestion from "./Components/AskQuestion";
import { Box, ThemeProvider } from "@mui/material";
import Image from "./imgs/logo.svg";
import { styled } from "@mui/system";
import { theme } from "./style/theme";

const StyledLogo = styled("img")`
  width: 150px;
  height: 150px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledLogo src={Image} />
        <AskQuestion />
      </Box>
    </ThemeProvider>
  );
}

export default App;
