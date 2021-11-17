import React from "react";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function Paginator({ actual, totalItems, limit, nextPage, lastPage }) {
  const pages = Math.ceil(totalItems / limit);

  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-md-6 col-sm-12 text-left">
          <p>Page {actual}</p>
        </div>
        <div className="col-md-6 col-sm-12 text-right">
          {actual > 1 && (
            <IconButton onClick={lastPage}>
              <NavigateBeforeIcon />
            </IconButton>
          )}
          {actual !== pages && (
            <IconButton onClick={nextPage}>
              <NavigateNextIcon />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default Paginator;
