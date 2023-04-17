import React from "react";
import theme from "./theme.js";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer.js";
import Movies from "./pages/Movies.js";
import Series from "./pages/Series.js";
import SignUpForm from "./pages/SignUpForm.js";
import SignInForm from "./pages/SignInForm.js";
import Trending from "./pages/Trending.js";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { APIContextProvider } from "./context/APIContext.js";
import { AppbarContextProvider } from "./context/AppbarContext.js";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <APIContextProvider>
          <AppbarContextProvider>
            <Appbar />
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/signin" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes>
            <Footer />
          </AppbarContextProvider>
        </APIContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
