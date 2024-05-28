import { createBrowserRouter } from "react-router-dom";

// import PageNotFound from "./../app/pages/PageNotFound/index";
import Admin from "./Admin";
import HomeAdmin from "../admin/pages/HomeAdmin";
import ApplicationLayoutAdmin from "./Admin/ApplicationLayoutAdmin";
import CartAdmin from "../admin/pages/CartAdmin";
import ProductAdmin from "../admin/pages/ProductAdmin";
import Users from "../admin/pages/User";
import Login from "../admin/pages/Login";
import EmptyLayoutAdmin from "./Admin/EmptyLayoutAdmin";
import AddProductAdmin from "../admin/pages/ProductAdmin/AddProductAdmin";
import EditProductAdmin from "../admin/pages/ProductAdmin/EditProductAdmin";
import EditCartAdmin from "../admin/pages/CartAdmin/EditCartAdmin";
import AddUser from "../admin/pages/User/AddUser";
import EditUser from "../admin/pages/User/EditUser";
import CategoryAdmin from "../admin/pages/CategoryAdmin";
import AddCategoryAdmin from "../admin/pages/CategoryAdmin/AddCategoryAdmin";
import EditCategoryAdmin from "../admin/pages/CategoryAdmin/EditCategoryAdmin";
import AllCartAdmin from "../admin/pages/CartAdmin/AllCartAdmin";
import AllCategoryAdmin from "../admin/pages/CategoryAdmin/AllCategoryAdmin";
import AllProdcutsAdmin from "../admin/pages/ProductAdmin/AllProdcutsAdmin";
import AllUsers from "./../admin/pages/User/AllUsers/index";

const router = createBrowserRouter([
  {
    path: "StoreAdmin",
    element: <Admin />,
    children: [
      {
        element: <ApplicationLayoutAdmin />,
        children: [
          {
            path: "Dashboards",
            element: <HomeAdmin />,
          },
          {
            path: "CartAdmin",
            element: <CartAdmin />,
            children: [
              {
                path: "EditCart/:id",
                element: <EditCartAdmin />,
              },
              {
                path: "AllCartAdmin",
                element: <AllCartAdmin />,
              },
            ],
          },
          {
            path: "ProductAdmin",
            element: <ProductAdmin />,
            children: [
              {
                path: "AddProductAdmin",
                element: <AddProductAdmin />,
              },
              {
                path: "EditProduct/:id",
                element: <EditProductAdmin />,
              },
              {
                path: "AllProducts",
                element: <AllProdcutsAdmin />,
              },
            ],
          },

          {
            path: "Category",
            element: <CategoryAdmin />,
            children: [
              {
                path: "AllCategory",
                element: <AllCategoryAdmin />,
              },
              {
                path: "AddCategory",
                element: <AddCategoryAdmin />,
              },
              {
                path: "EditCategory/:id",
                element: <EditCategoryAdmin />,
              },
            ],
          },
          {
            path: "UserAccount",
            element: <Users />,
            children: [
              {
                path: "AddUser",
                element: <AddUser />,
              },
              {
                path: "AllUsers",
                element: <AllUsers />,
              },
              {
                path: "EditUser/:id",
                element: <EditUser />,
              },
            ],
          },
        ],
      },
      {
        element: <EmptyLayoutAdmin />,
        children: [
          {
            path: "",
            element: <Login />,
          },
        ],
      },
    ],
  },

  // {
  //   path: "*", // For unmatched paths
  //   element: <PageNotFound />,
  // },
]);

export default router;
