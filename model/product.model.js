import { Schema, model } from "mongoose";

const productsSchema = Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

productsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

productsSchema.set("ToJSON", {
  virtuals: true,
});

const Product = model("products", productsSchema);

export default Product;
