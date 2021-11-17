const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
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

const Product = mongoose.model("products", productsSchema);

module.exports = Product;
