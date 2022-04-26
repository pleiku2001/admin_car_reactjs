import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./widgetLg.css";
export default function WidgetLg() {
  const navigate = useNavigate();

  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://carappreactjs.herokuapp.com/api/order")
      .then((res) => {
        // console.log(res?.data);
        setData(res?.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);
  const HandleClick = (e, k) => {
    axios
      .put("https://carappreactjs.herokuapp.com/api/order/" + k, {
        status: e,
      })
      .then((res) => {
        console.log("update");
      })
      .catch((error) => {
        console.log("error");
      });
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
    console.log(e, k);
  };
  // console.log(data);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Number</th>
          <th className="widgetLgTh">Address</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Detail</th>
          <th className="widgetLgTh">Change Status</th>
        </tr>
        {data?.map((e) => {
          return (
            <tr className="widgetLgTr" key={e?._id}>
              <td className="widgetLgUser">
                <div className="item">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/03/18/07/06/couple-7076004__340.png"
                    alt=""
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{e?.name}</span>
                </div>
              </td>
              <td className="widgetLgDate">{e?.number}</td>
              <td className="widgetLgDate">{e?.address}</td>
              <td className="widgetLgAmount">${e?.total}</td>
              <td className="widgetLgStatus">
                <Button type={e?.status} />
              </td>
              <td className="widgetLgProducts">
                {e?.products?.map((e) => {
                  return (
                    <>
                      <p>price: {e?.price}</p>
                      <p>quantity: {e?.quantity}</p>
                      <p>size: {e?.size}</p>
                      <p>id: {e?._id}</p>
                      <p>
                        <img src={e?.img} className="widgetLgImg" alt="" />
                      </p>
                    </>
                  );
                })}
              </td>
              <td className="widgetLgAmount">
                <button
                  onClick={() => HandleClick("declined", e?._id)}
                  type={e?.status}
                >
                  Declined
                </button>
                <button
                  onClick={() => HandleClick("approved", e?._id)}
                  type={e?.status}
                >
                  Approved
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

// <tr className="widgetLgTr">
//   <td className="widgetLgUser">
//     <img
//       src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//       alt=""
//       className="widgetLgImg"
//     />
//     <span className="widgetLgName">Susan Carol</span>
//   </td>
//   <td className="widgetLgDate">2 Jun 2021</td>
//   <td className="widgetLgAmount">$122.00</td>
//   <td className="widgetLgStatus">
//     <Button type="Declined" />
//   </td>
// </tr>
// <tr className="widgetLgTr">
//   <td className="widgetLgUser">
//     <img
//       src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//       alt=""
//       className="widgetLgImg"
//     />
//     <span className="widgetLgName">Susan Carol</span>
//   </td>
//   <td className="widgetLgDate">2 Jun 2021</td>
//   <td className="widgetLgAmount">$122.00</td>
//   <td className="widgetLgStatus">
//     <Button type="Pending" />
//   </td>
// </tr>
// <tr className="widgetLgTr">
//   <td className="widgetLgUser">
//     <img
//       src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//       alt=""
//       className="widgetLgImg"
//     />
//     <span className="widgetLgName">Susan Carol</span>
//   </td>
//   <td className="widgetLgDate">2 Jun 2021</td>
//   <td className="widgetLgAmount">$122.00</td>
//   <td className="widgetLgStatus">
//     <Button type="Approved" />
//   </td>
// </tr>
