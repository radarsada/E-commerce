const { Mongoose, default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
});
module.exports = products = mongoose.model("products", productSchema);
