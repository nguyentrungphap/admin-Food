import React, { useState } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function AddUser() {
  return (
    <div className={style.addUser}>
      <div className={style.backButton}>
        <Link to="/StoreAdmin/UserAccount/AllUsers">
          <ArrowBackIcon />
        </Link>
      </div>
      <h2>Add User </h2>
      <form>
        <div className={style.wrapper}>
          <div className={style.left}>
            <label htmlFor="name">Customer ID:</label>
            <input type="text" name="id" placeholder="Customer ID" />

            <label htmlFor="name">Customer Name:</label>
            <input type="text" name="name" placeholder="Customer Name" />

            <label htmlFor="name">Customer Password:</label>
            <input type="text" name="number" placeholder="Customer Password" />
          </div>

          <div className={style.right}>
            <label htmlFor="name">Customer Email:</label>
            <input type="email" name="email" placeholder="Customer Email" />

            <label htmlFor="name">Customer Address:</label>
            <input type="text" name="address" placeholder="Customer Address" />

            <label htmlFor="name">Customer Access:</label>
            <select>
              <option value="1">Quản ly</option>
              <option value="2">Quản trị viên</option>
              <option value="3">Người dùng</option>
            </select>
          </div>
        </div>

        <button>Thêm sản phẩm</button>
      </form>
    </div>
  );
}

export default AddUser;
