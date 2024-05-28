import React, { useState } from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { selectUserAccounts } from "../../../redux/user/selector";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditUser() {
  const Customer = useSelector(selectUserAccounts);
  console.log({ Customer });
  const id = useParams();
  const [access, setAccess] = useState("");

  const renderEditCustomer = () => {
    return Customer.map((item) => {
      if (item.CustomerID.toString() === id.id) {
        return (
          <form key={item.CustomerID}>
            <div className={style.wrapper}>
              <div className={style.left}>
                <label htmlFor="name">Customer ID:</label>
                <input type="text" name="id" placeholder={item.CustomerID} />
                <label htmlFor="name">Customer Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder={item.CustomerName}
                />
                <label htmlFor="name">Customer Password:</label>

                <input
                  type="text"
                  name="number"
                  placeholder={item.Customerpassword}
                />
              </div>
              <div className={style.right}>
                <label htmlFor="name">Customer Email:</label>

                <input
                  type="email"
                  name="email"
                  placeholder={item.CustomerEmail}
                />
                <label htmlFor="name">Customer Address:</label>

                <input
                  type="text"
                  name="address"
                  placeholder={item.CustomerAddress}
                />
                <label htmlFor="name">Customer Access:</label>
                <select defaultValue={access === "" ? item.access : test}>
                  <option value="1" onClick={() => setAccess(1)}>
                    Quản ly
                  </option>
                  <option value="2" onClick={() => setAccess(2)}>
                    Quản trị viên
                  </option>
                  <option value="3" onClick={() => setAccess(3)}>
                    Người dùng
                  </option>
                </select>
              </div>
            </div>
            <button>Sửa sản phẩm</button>
          </form>
        );
      }
    });
  };
  return (
    <div className={style.editUser}>
      <div className={style.backButton}>
        <Link to="/StoreAdmin/UserAccount/AllUsers">
          <ArrowBackIcon />
        </Link>
      </div>
      <h2>Edit User </h2>
      {renderEditCustomer()}
    </div>
  );
}

export default EditUser;
