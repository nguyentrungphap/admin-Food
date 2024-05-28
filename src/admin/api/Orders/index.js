import instance from "..";

export const getOrders = () => {
  return instance.get("/Orders");
};
