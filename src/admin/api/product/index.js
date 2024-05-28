import instance from "..";

export const getProductsAdminAPI = () => {
  return instance.get("/Products");
};
export const postProductsAPI = () => {
  return instance.post("/Products", {});
};
