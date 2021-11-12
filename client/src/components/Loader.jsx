import React from "react";
import { CircularProgress } from "@material-ui/core";

function Loader() {
  return (
    <div className="text-center">
      <CircularProgress />
    </div>
  );
}

export default Loader;
