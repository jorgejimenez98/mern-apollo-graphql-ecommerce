import React, { useState } from "react";
import { ConfirmDialog, CustomAddLinkButton } from "../../../components";
import { LinkContainer } from "react-router-bootstrap";
import { Edit, Delete } from "@mui/icons-material";
import Paginator from "../custom.paginator";
import * as mui from "@mui/material";

function TableProducts(props) {
  const [open, setOpen] = useState(false);
  const [nameToDelete, setNameToDelete] = useState("");
  const [productId, setProductId] = useState(-1);

  const openDialog = (id, name) => {
    setOpen(true);
    setNameToDelete(name);
    setProductId(id);
  };

  const handleClose = () => {
    setOpen(false);
    setNameToDelete("");
    setProductId(-1);
  };

  const confirmAgree = () => {
    props.confirmDelete(productId);
    handleClose();
  };

  const lastPage = () => {
    props.setOffset(props.offset - props.limit);
    props.setActualPage(props.actualPage - 1);
  };

  const nextPage = () => {
    props.setOffset(props.offset + props.limit);
    props.setActualPage(props.actualPage + 1);
  };

  return (
    <div className="container mt-4">
      <mui.Card>
        <mui.CardHeader
          title="Clients List"
          subheader={`${props.data.length} items`}
          action={
            <CustomAddLinkButton addLink="/products/add" title="Add Product" />
          }
        />
        <mui.CardContent>
          <mui.List>
            {props.data.map((row) => (
              <React.Fragment key={row.id}>
                <mui.ListItem dense button style={{ height: "4em" }}>
                  <mui.ListItemText
                    id={`label-${row.id}`}
                    primary={
                      <strong>{`${row.name} | $${row.price} | Stock: ${row.stock}`}</strong>
                    }
                  />
                  <mui.ListItemSecondaryAction>
                    {/* EDIT */}
                    <LinkContainer to={`#`}>
                      <mui.Tooltip
                        title={`Edit Product ${row.name}`}
                        placement="bottom"
                        aria-label="edit"
                        TransitionComponent={mui.Zoom}
                      >
                        <mui.IconButton>
                          <Edit />
                        </mui.IconButton>
                      </mui.Tooltip>
                    </LinkContainer>
                    {/* DELETE */}
                    <mui.Tooltip
                      title={`Deleet Product ${row.name}`}
                      placement="bottom"
                      aria-label="delete"
                      TransitionComponent={mui.Zoom}
                    >
                      <mui.IconButton
                        onClick={() => openDialog(row.id, `${row.name}`)}
                      >
                        <Delete />
                      </mui.IconButton>
                    </mui.Tooltip>
                  </mui.ListItemSecondaryAction>
                </mui.ListItem>
                <mui.Divider />
              </React.Fragment>
            ))}
          </mui.List>

          <Paginator
            actual={props.actualPage}
            offset={props.offset}
            totalItems={props.total}
            limit={props.limit}
            lastPage={lastPage}
            nextPage={nextPage}
          />
        </mui.CardContent>
      </mui.Card>

      <ConfirmDialog
        type={"Product"}
        name={nameToDelete}
        open={open}
        handleClose={handleClose}
        confirmAgree={confirmAgree}
      />
    </div>
  );
}

export default TableProducts;
