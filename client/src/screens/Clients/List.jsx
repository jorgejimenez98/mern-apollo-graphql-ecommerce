import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { CLIENTS_QUERY } from "../../graphql/queries";
import { DELETE_CLIENT } from "../../graphql/mutations";
import { Loader, Message } from "../../components";
import { TableClients } from "../../core/mui-datatable";

const ClientsList = () => {
  const { loading, error, data } = useQuery(CLIENTS_QUERY, {
    pollInterval: 500,
  });

  const [
    deleteClient,
    { data: dataDelete, error: errorDelete, loading: loadingDelete },
  ] = useMutation(DELETE_CLIENT);

  const confirmDelete = (id) => {
    deleteClient({ variables: { deleteClientId: id } });
  };

  if (dataDelete) {
    console.log("Delete OOKOKOK");
  }

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message text={error.message} type="error" />
      ) : (
        data?.getClientsList && (
          <React.Fragment>
            {loadingDelete && <Loader />}
            {errorDelete && <Message text={error.message} type="error" />}

            <TableClients
              data={data.getClientsList}
              confirmDelete={confirmDelete}
            />
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
};

export default ClientsList;
