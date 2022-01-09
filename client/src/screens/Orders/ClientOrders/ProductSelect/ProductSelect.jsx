import React, { useState, useEffect } from "react";
import Select from "react-select";
import TableProductSelected from "../TableProductSelected/TableProductSelected";

function ProductSelect({ list }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updateTotalPrice();
    // eslint-disable-next-line
  }, [selectedProducts]);

  const handleChange = (newProducts) => {
    const newProductsAux = newProducts.map((item) => {
      return { ...item, quantity: item?.quantity ? item.quantity : 0 };
    });
    setSelectedProducts(newProductsAux);
  };

  const handleDelete = (item) => {
    const listAux = selectedProducts.filter((x) => x.id !== item.id);
    setSelectedProducts(listAux);
  };

  const handleUpdateQuantity = (newValue, index) => {
    let listAux = selectedProducts;
    listAux[index].quantity = newValue;
    setSelectedProducts(listAux);
    updateTotalPrice();
  };

  const updateTotalPrice = () => {
    if (selectedProducts.length === 0) {
      setTotalPrice(0);
      return;
    }
    let newTotalPrice = 0;
    selectedProducts.forEach((item) => {
      newTotalPrice += item.price * item.quantity;
    });
    setTotalPrice(newTotalPrice);
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

      <p className="font-weight-bold float-right mt-3">Total: $ {totalPrice}</p>
    </React.Fragment>
  );
}

export default ProductSelect;
