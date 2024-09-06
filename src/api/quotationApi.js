import { api, handleResponse, handleError } from "./api";

export const getQuotationList = (token, orderId) =>
  api(token)
    .get(`/quotation/list?orderId=${orderId}`)
    .then(handleResponse)
    .catch(handleError);
