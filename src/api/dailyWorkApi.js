import { api, handleResponse, handleError } from "./api";

// export const logIn = (data) => api().post("/user/login", data).then(handleResponse).catch(handleError);

export const getDailyWorkList = (token,createdBy,limit) => api(token).get(`/dailyWork/list?createdBy=${createdBy}&limit=${50}`).then(handleResponse).catch(handleError);

export const createDailyWork = (token,data) => api(token).post(`/dailyWork`,data).then(handleResponse).catch(handleError);
export const editDailyWork = (token,id,data) => api(token).patch(`/dailyWork/${id}`,data).then(handleResponse).catch(handleError);
