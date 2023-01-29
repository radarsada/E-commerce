import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateComponent() {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setcompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    console.warn(params);
    let result = fetch(`http://localhost:5000/product/${params.id}`);
    result = await (await result).json();
    console.warn(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setcompany(result.company);
  };
  const updateProduct = async () => {
    // console.warn(result);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: { "Content-Type": "Application/json" },
    });
    result = await result.json;
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="Addproduct">
      <h1>Update product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product company"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setcompany(e.target.value);
        }}
      />

      <button onClick={updateProduct} className="signupbutton">
        Update Product
      </button>
    </div>
  );
}
