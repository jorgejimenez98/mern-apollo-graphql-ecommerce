import React from "react";
import { Query } from "react-apollo";
import MUIDataTable from "mui-datatables";
import { CLIENTS_QUERY } from "../../graphql/queries";
import { Loader, Message } from "../../components";
import { clientColumns, clientlistOptions } from "../../core/mui-datatable";

const ClientsList = () => {
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
                <React.Fragment>
                  <div className="container mt-3">
                    <MUIDataTable
                      title={`Clients List (${data.getClientsList.length})`}
                      data={data.getClientsList}
                      columns={clientColumns}
                      options={clientlistOptions}
                    />
                  </div>
                </React.Fragment>
              )
            )}
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default ClientsList;
