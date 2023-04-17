import React, { useContext } from "react";
import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";
import { SlUser, SlMagnifier, SlMenu, SlClose } from "react-icons/sl";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import MobileSearch from "./MobileSearch";
import { AppbarContext } from "../context/AppbarContext";

const navLinks = [
  {
    name: "HOME",
    to: "/",
  },
  {
    name: "MOVIES",
    to: "/movies",
  },
  {
    name: "TV SERIES",
    to: "/series",
  },
  {
    name: "MY LIST",
    to: "/list",
  },
];

const Appbar = () => {
  const {
    showMobileNav,
    setShowMobileNav,
    showMobileSearch,
    setShowMobileSearch,
  } = useContext(AppbarContext);
  const navigate = useNavigate();

  return (
    <AppBar elevation={0} sx={{ color: "#f3f3f3" }}>
      <Toolbar>
        <Container>
          <Box className="nav">
            <MobileNav />
            <MobileSearch />
            <Box className="menu-icon">
              {!showMobileNav ? (
                <SlMenu onClick={() => setShowMobileNav(true)} />
              ) : (
                <SlClose
                  id="close-icon"
                  onClick={() => setShowMobileNav(false)}
                />
              )}
            </Box>
            <Box className="left-nav">
              <Typography variant="h6" sx={{ cursor: "pointer" }}>
                LOGO
              </Typography>
              <Box className="nav-links">
                {navLinks.map((link, index) => (
                  <Typography
                    key={index}
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(link.to)}
                  >
                    {link.name}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box className="right-nav">
              <Search />
              <Box className="profile">
                <SlUser style={{ cursor: "pointer" }} />
                <Typography variant="body2" sx={{ cursor: "pointer" }}>
                  Simon James
                </Typography>
              </Box>
            </Box>
            <Box className="nav-icons">
              <SlMagnifier
                onClick={() => {
                  if (showMobileNav) {
                    setShowMobileNav(false);
                  }
                  setShowMobileSearch(!showMobileSearch);
                }}
              />
              <SlUser />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
