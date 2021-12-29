import * as React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        color="inherit"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Options
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <LinkContainer to="/products/add">
          <MenuItem onClick={handleClose}>New Product</MenuItem>
        </LinkContainer>

        <LinkContainer to="/client/add">
          <MenuItem onClick={handleClose}>New Client</MenuItem>
        </LinkContainer>

        <Divider />
        <LinkContainer to="/products/list">
          <MenuItem onClick={handleClose}>Products List</MenuItem>
        </LinkContainer>
        <LinkContainer to="/clients/list">
          <MenuItem onClick={handleClose}>Clients List</MenuItem>
        </LinkContainer>
      </Menu>
    </div>
  );
}
