import React from "react";
import { Query } from "react-apollo";
import { CLIENTS_QUERY } from "../../graphql/queries";
import { Loader, Message } from "../../components";

const ClientsList = () => (
  <Query query={CLIENTS_QUERY}>
    {/* Show Consult States */}
    {({ loading, error, data }) => (
      <React.Fragment>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message text={error.message} type="error" />
        ) : (
          <React.Fragment>All is OK</React.Fragment>
        )}
      </React.Fragment>
    )}
  </Query>
);

export default ClientsList;
