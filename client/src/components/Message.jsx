import * as React from "react";
import { Box, IconButton, Collapse, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Message(text, type) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
}
