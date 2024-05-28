import React from "react";
import { useSelector } from "react-redux";

import style from "./style.module.scss";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { selectCategories } from "../../../redux/categoryAdmin/selector";
function AllCategoryAdmin() {
  const categoryItems = useSelector(selectCategories);

  const renderAllCategoryAdmin = () => {
    return categoryItems.map((item) => (
      <tr key={item.CategoryID}>
        <td>{item.CategoryID}</td>
        <td>{item.CategoryName}</td>
        <td>{item.Description}</td>
        <td>
          <div className={style.buttonEdit}>
            <button className={style.remove}>
              <DeleteIcon />
            </button>
            <Link to={`/StoreAdmin/Category/EditCategory/${item.CategoryID}`}>
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
      <div className={style.controler}>
        <Link to="/StoreAdmin/Category/AddCategory">
          <button>
            <AddIcon /> Add product
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderAllCategoryAdmin()}</tbody>
      </table>
    </div>
  );
}

export default AllCategoryAdmin;
