import React from "react";
import { useSelector } from "react-redux";

import style from "./style.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { selectUserAccounts } from "../../../redux/user/selector";
function AllUsers() {
  const userItem = useSelector(selectUserAccounts);
  console.log("a", userItem);

  const renderCartAdmin = () => {
    return userItem.map((item) => (
      <tr key={item.CustomerID}>
        <td>{item.CustomerID}</td>
        <td>{item.CustomerName}</td>
        <td>{item.Customerpassword}</td>
        <td>{item.CustomerEmail}</td>
        <td>{item.CustomerAddress}</td>
        <td>
          {item.access == 1
            ? "Quản lý"
            : item.access == 2
            ? "Quản trị viên"
            : "Người dùng"}
        </td>
        <td>
          <div className={style.buttonEdit}>
            <button
              className={style.remove}
              onClick={() => onRemoveFromCart(item.id)}
            >
              <DeleteIcon />
            </button>
            <Link to={`/StoreAdmin/UserAccount/EditUser/${item.CustomerID}`}>
              <button onClick={() => onRemoveFromCart(item.id)}>
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
      <div className={style.controler}>
        <Link to="/StoreAdmin/UserAccount/AddUser">
          <button>
            <AddIcon /> Add User
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Address</th>
            <th>Access</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderCartAdmin()}</tbody>
      </table>
    </div>
  );
}

export default AllUsers;
