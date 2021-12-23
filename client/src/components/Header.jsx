import * as React from "react";
import { LinkContainer } from "react-router-bootstrap";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LinkContainer to={"/"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </LinkContainer>
          <LinkContainer to={"/"}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="pointer"
            >
              GraphQL Ecommerce
            </Typography>
          </LinkContainer>

          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
