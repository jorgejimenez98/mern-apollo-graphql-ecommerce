import React from "react";

function Edit({ match }) {
  const clientId = match.params.clientId;

  return (
    <div>
      <h3>Edit Client {clientId}</h3>
    </div>
  );
}

export default Edit;
