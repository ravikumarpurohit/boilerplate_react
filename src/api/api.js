import axios from "axios";

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;

export const api = (token = null) => {
  if (token) {
    return axios.create({
      // withCredentials: true,
      baseURL: `${BACKEND_URI}/api/v1`,
      headers: { authorization: `Bearer ${token}` },
    });
  } else {
    return axios.create({
      // withCredentials: true,
      baseURL: `${BACKEND_URI}/api/v1`,
    });
  }
};

export const handleResponse = (res) => {
  console.log(`api handleResponse ${JSON.stringify(res.data)}`);
  const data = res.data;
  if (res.data.error) {
    const error = data.message ? data.message : data.error;
    return Promise.reject(error);
  }
  return data;
};

export const handleError = (error) => {
  console.log(`api handleError ${JSON.stringify(error)}`);
  if (error.response) {
    return error.response.data;
  }
};
