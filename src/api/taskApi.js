import { api, handleResponse, handleError } from "./api";

// export const logIn = (data) => api().post("/user/login", data).then(handleResponse).catch(handleError);

export const getTaskList = (token,assigneeId,limit) => api(token).get(`/task/list?assigneeId=${assigneeId}&limit=${50}`).then(handleResponse).catch(handleError);

export const createTask = (token,data) => api(token).post(`/task`,data).then(handleResponse).catch(handleError);
export const editTask = (token,id,data) => api(token).patch(`/task/${id}`,data).then(handleResponse).catch(handleError);
export const changeTaskStatus = (token,id,data) => api(token).patch(`/task/change-status/${id}`,data).then(handleResponse).catch(handleError);
