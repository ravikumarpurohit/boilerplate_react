import { api, handleResponse, handleError } from "./api";

export const getCustomerList = (token, businessId) =>
  api(token)
    .get(`/customer/list?businessId=${businessId}`)
    .then(handleResponse)
    .catch(handleError);
