import { api, handleResponse, handleError } from "./api";

export const getInquiryList = (token, businessId) =>
  api(token)
    .get(`/inquiry/list?businessId=${businessId}`)
    .then(handleResponse)
    .catch(handleError);
