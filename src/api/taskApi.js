import { api, handleResponse, handleError } from "./api";

// export const logIn = (data) => api().post("/user/login", data).then(handleResponse).catch(handleError);

export const getTaskList = (token,assigneeId,limit) => api(token).get(`/task/list?assigneeId=${assigneeId}&limit=${50}`).then(handleResponse).catch(handleError);

export const createProduct = (token,data) => api(token).post("/task",data).then(handleResponse).catch(handleError);
export const editProduct = (token,id,data) => api(token).patch(`/task/${id}`,data).then(handleResponse).catch(handleError);
