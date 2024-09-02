import { api, handleResponse, handleError } from "./api";

// export const logIn = (data) => api().post("/user/login", data).then(handleResponse).catch(handleError);

export const getNameList = (token) => api(token).get("/user/nameList").then(handleResponse).catch(handleError);
export const getReportees = (token) => api(token).get("/user/reportees").then(handleResponse).catch(handleError);

// export const logout = (token) => api(token).post("/user/logout").then(handleResponse).catch(handleError);
