import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import "./user.css";

export default function User() {
  const [username,setUserName] =useState()
  const [name,setName] =useState()
  const [email,setEmail] =useState()
  const [number,setNumber] =useState()
  const [address,setAddress] =useState()
  // address createdAt email isAdmin lastName name number username _id
  const [data, setData] = useState();
  const [loading,setLoading]= useState(false) // true loading
  let param = useParams();
  // console.log(param)
    useEffect(() => {
      axios
        .get("https://carappreactjs.herokuapp.com/api/users/find/" + param?.userId)
        .then((res) => {
            if(res.data){
                setData(res.data);
                // console.log(res.data)
            }
          // console.log("success");
        })
        .catch((error) => {
          console.log("error");
        });
    },[] );

  // console.log(param?.productId);

const handleUpdate = async (e)=>{
  e.preventDefault();
  setLoading(true)
  try {
      const res = await axios.put(`https://carappreactjs.herokuapp.com/api/users/${param?.userId}`, {
        name: name,
        number: number,
        address: address,
        username: username,
        email: email,
      });
      console.log(res)
      setLoading(false)
      setTimeout((e)=>{
        window.location.reload(false)
      },[2000])
  } catch (error) {
      console.log(error);
      setLoading(true)

      // setError(true)
  }
  // logoutt(dispatch);
  // navigate("/login")
}


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{data?.name}</span>
              <span className="userShowUserTitle">IsAdmin? : {data?.isAdmin ? "Admin": "User"}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Last Name: {data?.lastName}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{data?.createdAt}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{data?.number}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{data?.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{data?.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={data?.username}
                  className="userUpdateInput"
                  onChange={(e)=>setUserName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder={data?.name}
                  className="userUpdateInput"
                  onChange={(e)=>setName(e.target.value)}

                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={data?.email}
                  className="userUpdateInput"
                  onChange={(e)=>setEmail(e.target.value)}

                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={data?.number}
                  className="userUpdateInput"
                  onChange={(e)=>setNumber(e.target.value)}
                  
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={data?.address}
                  className="userUpdateInput"
                  onChange={(e)=>setAddress(e.target.value)}
                />
              </div>
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton" onClick={handleUpdate}>Update</button>
              {loading ? <>loading ,please wait a seconds to refesh page</> : ""}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
