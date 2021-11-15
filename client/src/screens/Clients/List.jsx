import React from "react";
import { useQuery } from "@apollo/client";
import { CLIENTS_QUERY } from "../../graphql/queries";
import { Loader, Message } from "../../components";
import { TableClients } from "../../core/mui-datatable";

const ClientsList = () => {
  const { loading, error, data } = useQuery(CLIENTS_QUERY);

  const confirmDelete = (id) => {
    console.log("Delete", id);
  };

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
};

export default ClientsList;
