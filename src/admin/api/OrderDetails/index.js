import instance from "..";

export const getOrderDetailsAdmin = () => {
  return instance.get("/OrderDetails");
};
