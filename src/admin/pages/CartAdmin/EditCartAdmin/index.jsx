import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./style.module.scss";
import { selectOrderDetails } from "../../../redux/OrderDetails/selector";
import { selectProductsAdmin } from "../../../redux/productAdmin/selector";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EditCartAdmin() {
  const { id } = useParams();
  const [total, setTotal] = useState(0);

  const OrderDetailsItem = useSelector(selectOrderDetails);
  const productItem = useSelector(selectProductsAdmin);

  const renderProductItem = () => {
    const totals = 0;
    return OrderDetailsItem.map((item) => {
      if (item.OrderDetailID.toString() === id) {
        return item.product.map((items) => {
          return productItem.map((product) => {
            if (items.ProductID === product.ProductID)
              return (
                <tbody key={product.ProductID}>
                  <tr>
                    <td>{product.ProductID}</td>
                    <td>{product.ProductName}</td>
                    <td>{items.Quantity}</td>
                    <td>{product.Price}</td>
                  </tr>
                </tbody>
              );
          });
        });
      }
    });
  };
  const renderTotal = () => {};
  return (
    <div className={style.addCartAdmin}>
      <div className={style.backButton}>
        <Link to="/StoreAdmin/CartAdmin/AllCartAdmin">
          <ArrowBackIcon />
        </Link>
      </div>
      <h2>Cart Detail</h2>
      <label>Customer ID: {id}</label>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        {renderProductItem()}
      </table>
      <div>
        <h3>Total: </h3>
        <span>{renderTotal()}</span>
      </div>
    </div>
  );
}

export default EditCartAdmin;
