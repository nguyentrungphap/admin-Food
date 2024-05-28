import { combineReducers, createStore } from "redux";
import cartAdminReducer from "./cartAdmin/cartAdminSlice";
import productAdminReducer from "./productAdmin/productAdminSlice";
import userReducer from "./user/userSlice";

import OrderDetailsReducer from "./OrderDetails/OrderDetailsSlice";
import categoryReducer from "./categoryAdmin/slice";

const rootReducer = combineReducers({
  cartAdmin: cartAdminReducer,
  productAdmin: productAdminReducer,
  user: userReducer,
  category: categoryReducer,
  OrderDetails: OrderDetailsReducer,
});

export const Store = createStore(rootReducer);
