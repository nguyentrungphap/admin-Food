import React, { useState } from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../redux/categoryAdmin/selector";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function AddCategoryAdmin() {
  const category = useSelector(selectCategories);
  return (
    <div className={style.addProductAdmin}>
      <div className={style.backButton}>
        <Link to="/StoreAdmin/ProductAdmin/AllCategoryAdmin">
          <ArrowBackIcon />
        </Link>
      </div>
      <h2>Thêm sản phẩm mới</h2>
      <form>
        <div className={style.wrapper}>
          <div className={style.left}>
            <label htmlFor="name">Category ID:</label>

            <input type="text" name="name" placeholder="Tên sản phẩm" />
            <label htmlFor="name">Category ID:</label>

            <input type="text" name="price" placeholder="Giá sản phẩm" />
            <label htmlFor="name">Category ID:</label>

            <input type="text" name="price" placeholder="Giảm giá" />
          </div>
          <div className={style.right}>
            <label htmlFor="name">Category ID:</label>

            <select value="1">
              {category.map((item) => {
                return (
                  <option key={item.CategoryID} value={item.CategoryID}>
                    {item.CategoryName}
                  </option>
                );
              })}
            </select>
            <label htmlFor="name">Category ID:</label>

            <input type="file" id="file-upload" required />
          </div>
        </div>

        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
}

export default AddCategoryAdmin;
