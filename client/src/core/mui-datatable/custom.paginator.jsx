import React from "react";

function Paginator({ actual, offset, totalItems, limit, nextPage, lastPage }) {
  const btnBefore =
    actual > 1 ? (
      <button onClick={lastPage} className="btn btn-success mr-2">
        &laquo; Before
      </button>
    ) : (
      ""
    );

  const pages = Math.ceil(totalItems) / limit;

  const btnNext =
    actual !== pages ? (
      <button onClick={nextPage} className="btn btn-success">
        &raquo; Next
      </button>
    ) : (
      ""
    );

  return (
    <div className="mt-5 d-flex justify-content-center">
      {btnBefore}
      {btnNext}
    </div>
  );
}

export default Paginator;
