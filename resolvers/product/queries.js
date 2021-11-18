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
};

export default productQueries;
