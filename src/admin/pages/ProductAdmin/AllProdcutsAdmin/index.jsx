import React from "react";
import { useSelector } from "react-redux";

import style from "./style.module.scss";
import { Image } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { selectProductsAdmin } from "../../../redux/productAdmin/selector";
import { selectCategories } from "../../../redux/categoryAdmin/selector";
function AllProdcutsAdmin() {
  const productItems = useSelector(selectProductsAdmin);
  const categoryItem = useSelector(selectCategories);

  const renderAllProdcutsAdmin = () => {
    return productItems.map((item) => (
      <tr key={item.ProductID}>
        <td>{item.ProductID}</td>
        <td>{item.ProductName}</td>
        <td>
          <Image src={item.image} />
        </td>
        <td>{item.Price}</td>
        <td>{item.Sale}</td>
        <td>{item.Description}</td>
        <td>
          {categoryItem.find((items) => items.CategoryID === item.CategoryID)
            ?.CategoryName || ""}
        </td>

        <td>
          <div className={style.buttonEdit}>
            <button
              className={style.remove}
              onClick={() => onRemoveFromProduct(item.id)}
            >
              <DeleteIcon />
            </button>
            <Link to={`/StoreAdmin/ProductAdmin/EditProduct/${item.ProductID}`}>
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
      <h1>Admin Product Management</h1>
      <div className={style.controler}>
        <Link to="/StoreAdmin/ProductAdmin/AddProductAdmin">
          <button>
            <AddIcon /> Add product
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Img</th>
            <th>Price</th>
            <th>Sale</th>
            <th>Description</th>
            <th>Categories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderAllProdcutsAdmin()}</tbody>
      </table>
    </div>
  );
}

export default AllProdcutsAdmin;
