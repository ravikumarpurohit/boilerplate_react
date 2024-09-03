import { api, handleResponse, handleError } from "./api";

// export const logIn = (data) => api().post("/user/login", data).then(handleResponse).catch(handleError);

export const getExpenseList = (token,id,limit) => api(token).get(`/expense/list?id=${id}&limit=${50}`).then(handleResponse).catch(handleError);

export const createExpense = (token,data) => api(token).post(`/expense`,data).then(handleResponse).catch(handleError);
export const editExpense = (token,id,data) => api(token).patch(`/expense/${id}`,data).then(handleResponse).catch(handleError);
