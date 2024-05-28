import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectProductsAdmin } from "../../../redux/productAdmin/selector";
import style from "./style.module.scss";
import { selectCategories } from "../../../redux/categoryAdmin/selector";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditProductAdmin() {
  const productId = useParams();
  const [fileName, setFileName] = useState("");

  console.log("tesst", productId);
  const productItem = useSelector(selectProductsAdmin);
  console.log({ productItem });

  const category = useSelector(selectCategories);

  console.log(productItem);

  const renderProductItem = () => {
    return productItem.map((item, index) => {
      if (item.ProductID.toString() === productId.id) {
        return (
          <div key={index} className={style.addProductAdmin}>
            <div className={style.backButton}>
              <Link to="/StoreAdmin/ProductAdmin/AllProdcutsAdmin">
                <ArrowBackIcon />
              </Link>
            </div>
            <h2>Thêm sản phẩm mới</h2>
            <form>
              <div className={style.wrapper}>
                <div className={style.left}>
                  <label htmlFor="name">Product Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={item.ProductName}
                    placeholder="Tên sản phẩm"
                  />
                  <label htmlFor="name">Price:</label>
                  <input
                    type="text"
                    name="price"
                    value={item.Price}
                    placeholder="Giá sản phẩm"
                  />
                  <label htmlFor="name">Sales:</label>
                  <input
                    type="text"
                    name="price"
                    value={item.Sale}
                    placeholder="Giảm giá"
                  />
                </div>
                <div className={style.right}>
                  <label htmlFor="name">Categories:</label>
                  <select
                    key={index}
                    placeholder={
                      category.find(
                        (items) => items.CategoryID === item.CategoryID
                      )?.CategoryName || ""
                    }
                  >
                    {category.map((item) => {
                      return (
                        <option key={item.CategoryID} value={item.CategoryID}>
                          {item.CategoryName}
                        </option>
                      );
                    })}
                  </select>
                  <label htmlFor="name">Image:</label>
                  <div className={style.fileInput}>
                    <input type="file" id="file-upload" required />
                    <label htmlFor="file-upload">
                      Chọn tệp
                      <span>{fileName == "" ? item.image : fileName}</span>
                    </label>
                  </div>
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

export default EditProductAdmin;
