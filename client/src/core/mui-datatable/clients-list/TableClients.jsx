import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Edit, Delete, ShoppingCart } from "@mui/icons-material";
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

function TableClients({ data }) {
  return (
    <div className="container mt-3">
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
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default TableClients;
