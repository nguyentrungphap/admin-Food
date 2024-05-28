import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./style.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { selectCategories } from "../../../redux/categoryAdmin/selector";

function EditCategoryAdmin() {
  const CategoryId = useParams();

  const categoryItems = useSelector(selectCategories);

  const renderProductItem = () => {
    return categoryItems.map((item, index) => {
      if (item.CategoryID.toString() === CategoryId.id) {
        return (
          <div key={index} className={style.addProductAdmin}>
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
                  <input type="text" name="name" value={item.CategoryID} />
                  <label htmlFor="name">Category Name:</label>
                  <input type="text" name="price" value={item.CategoryName} />
                  <label htmlFor="name">Description:</label>
                  <input type="text" name="price" value={item.Description} />
                </div>
              </div>

              <button type="submit">Sửa sản phẩm</button>
            </form>
          </div>
        );
      }
    });
  };
  return <div>{renderProductItem()}</div>;
}

export default EditCategoryAdmin;
