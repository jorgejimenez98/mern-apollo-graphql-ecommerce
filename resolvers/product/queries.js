import Product from "../../model/product.model";

const productQueries = {
  // Get Product List
  getProductList: (root, { limit, offset }) => {
    return new Promise((resolve, object) => {
      Product.find({}, (error, data) => {
        // Check Error
        if (error) rejects(error);
        // Return new Client
        else resolve(data);
      })
        .limit(limit)
        .skip(offset);
    });
  },

  // Get Product details By ID
  getProduct: (root, { id }) => {
    // Return promise consult
    return new Promise((resolve, object) => {
      // Get Product from Mongo DB
      Product.findById(id, (error, client) => {
        // Check Error
        if (error) rejects(error);
        // Return Product Details
        else resolve(client);
      });
    });
  },
};

export default productQueries;
