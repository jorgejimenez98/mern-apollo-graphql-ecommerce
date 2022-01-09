import React, { useState } from "react";
import Select from "react-select";
import TableProductSelected from "../TableProductSelected/TableProductSelected";

function ProductSelect({ list }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleChange = (newProducts) => {
    setSelectedProducts(newProducts);
  };

  const handleDelete = (item) => {
    const listAux = selectedProducts.filter((x) => x.id !== item.id);
    setSelectedProducts(listAux);
  };

  const handleUpdateQuantity = (newValue, index) => {
    console.log("Change", newValue, index);
  };

  return (
    <React.Fragment>
      <h3 className="text-center">Select Products</h3>

      <Select
        options={list}
        isMulti={true}
        onChange={handleChange}
        getOptionValue={(item) => item.id}
        getOptionLabel={(item) => item.name}
        placeholder={"Select Product..."}
        value={selectedProducts}
      />

      <TableProductSelected
        list={selectedProducts}
        handleDelete={handleDelete}
        handleUpdateQuantity={handleUpdateQuantity}
      />
    </React.Fragment>
  );
}

export default ProductSelect;
