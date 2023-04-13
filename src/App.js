import React from "react";
import theme from "./theme.js";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer.js";
import CardContainer from "./components/CardContainer.js";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar />
        <CardContainer />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
