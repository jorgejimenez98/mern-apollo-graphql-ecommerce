import React, { useState } from "react";
import { ConfirmDialog } from "../../../components";
import { LinkContainer } from "react-router-bootstrap";
import { Edit, Delete, ShoppingCart } from "@mui/icons-material";
import Paginator from "../custom.paginator";
import {
  IconButton,
  Tooltip,
  Zoom,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

function TableClients({ data, confirmDelete }) {
  const [open, setOpen] = useState(false);
  const [nameToDelete, setNameToDelete] = useState("");
  const [clientId, setClientId] = useState(-1);

  // Pagination
  const [actualPage, setActualPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const openDialog = (id, name) => {
    setOpen(true);
    setNameToDelete(name);
    setClientId(id);
  };

  const handleClose = () => {
    setOpen(false);
    setNameToDelete("");
    setClientId(-1);
  };

  const confirmAgree = () => {
    confirmDelete(clientId);
    handleClose();
  };

  return (
    <div className="container mt-3">
      <div className="text-center">
        <h3 className="text-muted">Clients List</h3>
      </div>
      <List>
        {data.map((row) => (
          <React.Fragment key={row.id}>
            <ListItem dense button style={{ height: "4em" }}>
              <ListItemText
                id={`label-${row.id}`}
                primary={
                  <strong>{`${row.name} ${row.lastname} (${row.company})`}</strong>
                }
              />
              <ListItemSecondaryAction>
                {/* EDIT */}
                <LinkContainer to={`/client/orders/${row.id}`}>
                  <Tooltip
                    title={`Look Orders of ${row.name} ${row.lastname}`}
                    placement="bottom"
                    aria-label="orders"
                    TransitionComponent={Zoom}
                  >
                    <IconButton>
                      <ShoppingCart />
                    </IconButton>
                  </Tooltip>
                </LinkContainer>
                {/* EDIT */}
                <LinkContainer to={`/client/edit/${row.id}`}>
                  <Tooltip
                    title={`Edit Client ${row.name} ${row.lastname}`}
                    placement="bottom"
                    aria-label="edit"
                    TransitionComponent={Zoom}
                  >
                    <IconButton>
                      <Edit />
                    </IconButton>
                  </Tooltip>
                </LinkContainer>
                {/* DELETE */}
                <Tooltip
                  title={`Deleet Client ${row.name} ${row.lastname}`}
                  placement="bottom"
                  aria-label="delete"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    onClick={() =>
                      openDialog(row.id, `${row.name} ${row.lastname}`)
                    }
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>

      {/* Paginator */}
      <Paginator actual={actualPage} offset={offset} />

      <ConfirmDialog
        type={"Client"}
        name={nameToDelete}
        open={open}
        handleClose={handleClose}
        confirmAgree={confirmAgree}
      />
    </div>
  );
}

export default TableClients;
