import React from "react";

function ClientOrders({ match }) {
  const clientId = match.params.clientId;

  return (
    <div>
      <h3>Client Orders {clientId}</h3>
    </div>
  );
}

export default ClientOrders;
