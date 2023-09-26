import { api, handleResponse, handleError } from "./api";

export const logIn = (data) => api().post("/user/login", data).then(handleResponse).catch(handleError);

export const checkUser = (token) => api(token).post("/user/checkUser").then(handleResponse).catch(handleError);

export const logout = (token) => api(token).post("/user/logout").then(handleResponse).catch(handleError);
