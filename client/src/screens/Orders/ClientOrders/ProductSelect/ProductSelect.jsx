import React, { useState } from "react";
import Select from "react-select";
import TableProductSelected from "../TableProductSelected/TableProductSelected";

function ProductSelect({ list }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleChange = (newProducts) => {
    setSelectedProducts(newProducts);
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
      />

      <TableProductSelected list={selectedProducts} />
    </React.Fragment>
  );
}

export default ProductSelect;
