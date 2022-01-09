import React from "react";
import * as mui from "@mui/material";
import { Form } from "react-bootstrap";
import { Delete } from "@mui/icons-material";

function TableProductSelected({ list, handleDelete, handleUpdateQuantity }) {
  return (
    <React.Fragment>
      {list.length !== 0 && (
        <React.Fragment>
          <h3 className="mt-3 text-center text-muted">Resume of Products</h3>
          <mui.TableContainer component={mui.Paper}>
            <mui.Table sx={{ minWidth: 650 }} aria-label="simple table">
              <mui.TableHead>
                <mui.TableRow>
                  <mui.TableCell>Product</mui.TableCell>
                  <mui.TableCell align="right">Price</mui.TableCell>
                  <mui.TableCell align="right">Stock</mui.TableCell>
                  <mui.TableCell>Quantity</mui.TableCell>
                  <mui.TableCell align="right"></mui.TableCell>
                </mui.TableRow>
              </mui.TableHead>
              <mui.TableBody>
                {list.map((row, index) => (
                  <mui.TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {/* Texts */}
                    <mui.TableCell component="th" scope="row">
                      {row.name}
                    </mui.TableCell>
                    <mui.TableCell align="right">{row.price}</mui.TableCell>
                    <mui.TableCell align="right">{row.stock}</mui.TableCell>

                    {/* Quantity */}
                    <mui.TableCell>
                      <Form.Group>
                        <Form.Control
                          type="number"
                          className="mt-2"
                          min="0"
                          step="1"
                          onChange={(e) =>
                            handleUpdateQuantity(e.target.value, index)
                          }
                          placeholder={`Quantity...`}
                        />
                      </Form.Group>
                    </mui.TableCell>

                    {/* Delete Button */}
                    <mui.TableCell align="right">
                      <mui.Tooltip
                        title={`Deleet Product ${row.name}`}
                        placement="bottom"
                        aria-label="delete"
                        TransitionComponent={mui.Zoom}
                      >
                        <mui.IconButton onClick={() => handleDelete(row)}>
                          <Delete />
                        </mui.IconButton>
                      </mui.Tooltip>
                    </mui.TableCell>
                  </mui.TableRow>
                ))}
              </mui.TableBody>
            </mui.Table>
          </mui.TableContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default TableProductSelected;
