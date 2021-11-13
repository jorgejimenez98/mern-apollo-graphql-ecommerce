import React from "react";
import { Query } from "react-apollo";
import { CLIENTS_QUERY } from "../../graphql/queries";
import { Loader, Message } from "../../components";
import { TableClients } from "../../core/mui-datatable";

const ClientsList = () => {
  const confirmDelete = (id) => {
    console.log("Delete", id);
  };

  return (
    <Query query={CLIENTS_QUERY}>
      {/* Show Consult States */}
      {({ loading, error, data }) => {
        return (
          <React.Fragment>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message text={error.message} type="error" />
            ) : (
              data?.getClientsList && (
                <TableClients
                  data={data.getClientsList}
                  confirmDelete={confirmDelete}
                />
              )
            )}
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default ClientsList;
