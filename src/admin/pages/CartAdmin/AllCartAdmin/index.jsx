import React from "react";
import { useSelector } from "react-redux";

import style from "./style.module.scss";

import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { selectCartsAdmin } from "./../../../redux/cartAdmin/selector";
import { selectUserAccounts } from "../../../redux/user/selector";
function AllCartAdmin() {
  const cartItems = useSelector(selectCartsAdmin);
  const CustomersItems = useSelector(selectUserAccounts);
  console.log(CustomersItems);

  const renderAllCartAdmin = () => {
    return cartItems.map((item) => (
      <tr key={item.OrderDetailID}>
        <td>{item.CustomerID}</td>
        <td>
          {CustomersItems.find((items) => items.CustomerID === item.CustomerID)
            ?.CustomerName || ""}
        </td>
        <td>{item.OrderDate}</td>
        <td>
          {item.Status === 1
            ? "Đã gửi"
            : item.Status === 2
            ? "Chưa Gửi"
            : "Hủy Đơn"}
        </td>
        <td>
          <div className={style.buttonEdit}>
            <button className={style.remove}>
              <DeleteIcon />
            </button>
            <Link to={`/StoreAdmin/CartAdmin/EditCart/${item.OrderDetailID}`}>
              <button>
                <EditIcon />
              </button>
            </Link>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className={style.wrapper}>
      <h1>Admin Cart Management</h1>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderAllCartAdmin()}</tbody>
      </table>
    </div>
  );
}

export default AllCartAdmin;
