const express = require("express");
const cors = require("cors");
require("./DB/config");
const mongoose = require("mongoose");
const Users = require("./DB/Users");
const Product = require("./DB/Product");
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json()); //middleware expreejs in postman api
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("app is working....");
});
app.post("/register", async (req, resp) => {
  let user = new Users(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
}); //http://localhost:5000/register use this link in postman()

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user); //if user found in database then it shows
    } else {
      resp.send({ result: "No User Found" }); //otherwise not
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.get("/products", async (req, resp) => {
  //get product API
  const products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No Product found" });
  }
});

app.delete("/product/:id", async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/product/:id", async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "result not found." });
  }
});

app.put("/product/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

app.get("/search/:key", async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
app.listen(5000);

//private component IMP=>some routes we dont want to expose until user do signUp
