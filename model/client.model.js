const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  company: { type: String, required: true },
  emails: { type: Array },
  age: { type: String, required: true },
  type: { type: String, required: true },
  orders: { type: Array },
});

clientSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

clientSchema.set("ToJSON", {
  virtuals: true,
});

const Client = mongoose.model("clients", clientSchema);

module.exports = Client;
