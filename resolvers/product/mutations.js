import Product from "../../model/product.model";

const productMutations = {
  // Create Product Resolver
  createProduct: (root, { input }) => {
    // Create Client Model
    const newProduct = new Product({
      name: input.name,
      price: input.price,
      stock: input.stock,
    });

    // Return Promise
    return new Promise((resolve, object) => {
      newProduct.save((error) => {
        // Check Error
        if (error) rejects(error);
        // Return new Client
        else resolve(newProduct);
      });
    });
  },
};

export default productMutations;
