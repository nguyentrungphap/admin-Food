import React from "react";
import Style from "./style.module.scss";
import Logo from "../../asset/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={Style.Navbar}>
      <div className={Style.Logo}>
        <Link to="/StoreAdmin">
          <img src={Logo} alt="My Logo" />
        </Link>
      </div>
      <ul className={Style.Links}>
        <li>
          <Link to="/StoreAdmin/Dashboards">Dashboards</Link>
        </li>
        <li>
          <Link to="/StoreAdmin/CartAdmin/AllCartAdmin">Cart</Link>
        </li>
        <li>
          <Link to="/StoreAdmin/category/AllCategory">Category</Link>
        </li>
        <li>
          <Link to="/StoreAdmin/ProductAdmin/AllProducts">Product</Link>
        </li>
        <li>
          <Link to="/StoreAdmin/UserAccount/AllUsers">User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
