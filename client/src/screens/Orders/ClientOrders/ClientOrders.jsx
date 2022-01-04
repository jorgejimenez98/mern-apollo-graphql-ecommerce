import React from "react";
import { useQuery } from "@apollo/client";
import { CLIENT_DETAILS } from "../../../graphql/queries";
import { Loader, Message } from "../../../components";
import ClientDetails from "../ClientDetails/ClientDetails";

function ClientOrders({ match }) {
  const clientId = match.params.clientId;

  const { loading, error, data } = useQuery(CLIENT_DETAILS, {
    pollInterval: 500,
    variables: { getClientId: clientId },
  });

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message text={error.message} type={"error"} />
      ) : (
        data?.getClient && (
          <div className="container mt-3">
            <div className="text-center">
              <h3>New Order</h3>
            </div>

            <div className="row">
              <div className="col-md-4">
                <ClientDetails client={data.getClient} />
              </div>
              <div className="col-md-8">Orders goes Here</div>
            </div>
          </div>
        )
      )}
    </React.Fragment>
  );
}

export default ClientOrders;
