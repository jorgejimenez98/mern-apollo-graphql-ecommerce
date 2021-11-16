import React from "react";

function Paginator({ actual, offset }) {
  const btnBefore =
    actual > 1 ? (
      <button className="btn btn-success mr-2">&laquo; Before</button>
    ) : (
      ""
    );

  const btnBefore =
    actual > 1 ? (
      <button className="btn btn-success mr-2">&laquo; Before</button>
    ) : (
      ""
    );

  return <div className="mt-5 d-flex justify-content-center">{btnBefore}</div>;
}

export default Paginator;
