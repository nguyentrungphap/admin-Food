import instance from "..";

export const getCustomers = () => {
  return instance.get("/Customers");
};
