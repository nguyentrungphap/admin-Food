import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setCarts } from "../../admin/redux/cartAdmin/cartAdminSlice";
import { getProductsAdminAPI } from "../../admin/api/product";
import { setProducts } from "../../admin/redux/productAdmin/productAdminSlice";
import { setUsers } from "../../admin/redux/user/userSlice";
import { getCategoriesAPI } from "./../../admin/api/categories/index";
import { setCategories } from "../../admin/redux/categoryAdmin/slice";
import { getCustomers } from "../../admin/api/Customers";
import { getOrders } from "../../admin/api/Orders";
import { setOrderDetails } from "../../admin/redux/OrderDetails/OrderDetailsSlice";
import { getOrderDetailsAdmin } from "../../admin/api/OrderDetails";

function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    cartApi();
    getProductAdmin();
    getUserAccount();
    getCategory();
    getOrderDetails();
  }, []);

  const cartApi = async () => {
    const response = await getOrders();
    const cart = response.data;
    dispatch(setCarts(cart));
  };
  const getProductAdmin = async () => {
    const response = await getProductsAdminAPI();
    const productItems = response.data;
    dispatch(setProducts(productItems));
  };
  const getUserAccount = async () => {
    const response = await getCustomers();
    const Customers = response.data;
    dispatch(setUsers(Customers));
  };
  const getCategory = async () => {
    const response = await getCategoriesAPI();
    const categories = response.data;
    dispatch(setCategories(categories));
  };
  const getOrderDetails = async () => {
    const response = await getOrderDetailsAdmin();
    const orderDetails = response.data;
    dispatch(setOrderDetails(orderDetails));
  };

  return <Outlet />;
}

export default Admin;
