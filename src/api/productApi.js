import { api, handleResponse, handleError } from "./api";

// export const logIn = (data) => api().post("/user/login", data).then(handleResponse).catch(handleError);

export const getProductList = (token,businessId,limit) => api(token).get(`/product/list?businessId=${businessId}&limit=${50}`).then(handleResponse).catch(handleError);

export const createProduct = (token,data) => api(token).post("/product",data).then(handleResponse).catch(handleError);
export const editProduct = (token,id,data) => api(token).patch(`/product/${id}`,data).then(handleResponse).catch(handleError);
