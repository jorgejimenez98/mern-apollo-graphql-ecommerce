import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { TableProducts } from "../../../core/mui-datatable";
import { PRODUCT_LIST_QUERY } from "../../../graphql/queries";
import { DELETE_PRODUCT } from "../../../graphql/mutations";
import { Loader, Message } from "../../../components";

export default function ListProduct() {
  // Pagination
  const [actualPage, setActualPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  const { loading, error, data } = useQuery(PRODUCT_LIST_QUERY, {
    pollInterval: 500,
    variables: { limit: limit, offset: offset },
  });

  const [
    deleteClient,
    { data: dataDelete, error: errorDelete, loading: loadingDelete },
  ] = useMutation(DELETE_PRODUCT);

  const confirmDelete = (id) => {
    deleteClient({ variables: { productId: id } });
  };

  if (dataDelete) {
    console.log("Delete Product OOKOKOK");
  }

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message text={error.message} type="error" />
      ) : (
        data?.getProductList && (
          <React.Fragment>
            {loadingDelete && <Loader />}
            {errorDelete && <Message text={error.message} type="error" />}

            <TableProducts
              data={data.getProductList}
              total={data.getProductsCount}
              confirmDelete={confirmDelete}
              actualPage={actualPage}
              setActualPage={setActualPage}
              offset={offset}
              setOffset={setOffset}
              limit={limit}
            />
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
}
