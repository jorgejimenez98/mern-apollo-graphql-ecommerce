import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import * as mui from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function CustomAddLinkButton(props) {
  return (
    <LinkContainer to={props.addLink}>
      <mui.Tooltip title={props.title} TransitionComponent={mui.Zoom}>
        <mui.IconButton>
          <AddIcon />
        </mui.IconButton>
      </mui.Tooltip>
    </LinkContainer>
  );
}

export default CustomAddLinkButton;
