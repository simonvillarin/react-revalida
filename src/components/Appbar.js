import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import { SlUser } from "react-icons/sl";
import Search from "./Search";
import React from "react";

const navLinks = [
  {
    name: "HOME",
    to: "/",
  },
  {
    name: "MY LIST",
    to: "/list",
  },
];

const Appbar = () => {
  return (
    <AppBar elevation={0} sx={{ color: "#f3f3f3" }}>
      <Toolbar>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ gap: "2rem" }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: "2rem" }}
            >
              <Typography variant="h6">LOGO</Typography>
              {navLinks.map((link, index) => (
                <Typography key={index} sx={{ cursor: "pointer" }}>
                  {link.name}
                </Typography>
              ))}
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: "1.5rem" }}
            >
              <Search />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ gap: "0.5rem" }}
              >
                <SlUser style={{ cursor: "pointer" }} />
                <Typography sx={{ cursor: "pointer" }}>Login</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
