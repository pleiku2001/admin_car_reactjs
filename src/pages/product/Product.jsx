import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");

export default function Product() {
    const [data, setData] = useState();
    useEffect(() => {
      axios
        .get("https://carappreactjs.herokuapp.com/api/products/find/" + param?.productId)
        .then((res) => {
            if(res.data){
                setData(res.data);
                console.log(res.data)
            }
          // console.log("success");
        })
        .catch((error) => {
          console.log("error");
        });
    },[] );

  let param = useParams();
  console.log(param?.productId);
  //createdAt desc img price title _id categories color
//   console.log(data)

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={data?.img} alt="" className="productInfoImg" />
            <span className="productName">{data?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{data?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">{data?.price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Description:</span>
              <span className="productInfoValue">{data?.desc}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Time:</span>
              <span className="productInfoValue">{data?.createdAt}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={data?.title} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={data?.img}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
