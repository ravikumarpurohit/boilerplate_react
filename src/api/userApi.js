import { api, handleResponse, handleError } from "./api";

// export const logIn = (data) => api().post("/user/login", data).then(handleResponse).catch(handleError);

export const createUser = (token,data) => api(token).post("/user",data).then(handleResponse).catch(handleError);
export const editUser = (token,id,data) => api(token).patch(`/user/${id}`,data).then(handleResponse).catch(handleError);
export const getNameList = (token) => api(token).get("/user/nameList").then(handleResponse).catch(handleError);
export const getUserList = (token) => api(token).get("/user/list").then(handleResponse).catch(handleError);
export const getUser = (token,id) => api(token).get(`/user/list/${id}`).then(handleResponse).catch(handleError);
export const getReportees = (token) => api(token).get("/user/reportees").then(handleResponse).catch(handleError);

// export const logout = (token) => api(token).post("/user/logout").then(handleResponse).catch(handleError);
