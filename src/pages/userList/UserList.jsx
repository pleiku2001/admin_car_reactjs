import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const axios = require("axios");
export default function UserList() {
  const [data, setData] = useState();
  // console.log(data);
  // _id username email isAdmin createdAt
  useEffect(() => {
    axios
      .get("https://carappreactjs.herokuapp.com/api/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "getRowId", width: 250 },
    {
      field: "username",
      headerName: "UserName",
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <div className="userListUser">
      //       <img className="userListImg" src={params.row.avatar} alt="" />
      //       {params.row.username}
      //     </div>
      //   );
      // },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Time Signed",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
