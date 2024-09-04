import { api, handleResponse, handleError } from "./api";



export const getBusinessList = (token) => api(token).get("/business/list").then(handleResponse).catch(handleError);


