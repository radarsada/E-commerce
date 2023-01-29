import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     getProducts();
  //   }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  //   console.warn(products);
  const deleteProduct = async (id) => {
    // console.warn(id);
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let searchkey = event.target.value;
    if (searchkey) {
      let result = await fetch(`http://localhost:5000/search/${searchkey}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts(); //no data then
    }
  };
  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        type=""
        className="search-product"
        placeholder="Search Product"
        onChange={searchHandle}
      />
      <ul>
        <li>Sr.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>category</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map(
          (
            item,
            index //we can create dynamic list
          ) => (
            <ul key={item._id}>
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
              <li>
                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                <button>
                  <Link
                    to={"/update/" + item._id}
                    style={{ textDecoration: "none" }}
                  >
                    update
                  </Link>
                </button>
              </li>
            </ul>
          )
        )
      ) : (
        <h1>No Result Found</h1>
      )}
    </div>
  );
}
