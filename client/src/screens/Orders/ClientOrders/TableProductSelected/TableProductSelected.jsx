import React from "react";
import * as mui from "@mui/material";

function TableProductSelected({ list }) {
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
                  <mui.TableCell align="right">Quantity</mui.TableCell>
                  <mui.TableCell align="right"></mui.TableCell>
                </mui.TableRow>
              </mui.TableHead>
              <mui.TableBody>
                {list.map((row) => (
                  <mui.TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <mui.TableCell component="th" scope="row">
                      {row.name}
                    </mui.TableCell>
                    <mui.TableCell align="right">{row.price}</mui.TableCell>
                    <mui.TableCell align="right">{row.stock}</mui.TableCell>
                    <mui.TableCell align="right">Quantity</mui.TableCell>
                    <mui.TableCell align="right">Delete</mui.TableCell>
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
