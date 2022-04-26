import { useState } from "react";
import { useNavigate } from "react-router";
import "./newProduct.css";
const axios = require("axios");

export default function NewProduct() {
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const navigate= useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("https://carappreactjs.herokuapp.com/api/products", {
        title: title,
        img: img,
        desc: desc,
        price: price,
        size: ["S", "M", "L"],
        color: ["yellow", "red", "white"],
        categories: ["luxury", "normal"],
      })
      .then((res) => {
        console.log("add successfully")
      })
      .catch((error) => {
        console.log("error");
      });
      alert("Add successfully!!!")
      navigate("/")
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="text"
            placeholder="src image"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Decription</label>
          <input
            type="text"
            placeholder="Decription"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {/* <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Categories" />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text" placeholder="size" />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input type="text" placeholder="Color" />
        </div> */}
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
