import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosParams = {
  baseURL: process.env.NEXT_PUBLIC_REST_API_URI
}

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      (axios.get<T>(url, config)),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      (axios.delete(url, config)),
    put: <T>(url: string, config: AxiosRequestConfig = {}) =>
      (axios.put(url, config)),
    post: <T>(url: string, config: AxiosRequestConfig = {}) =>
      (axios.post(url, config)),
    patch: <T>(url: string, config: AxiosRequestConfig = {}) =>
      (axios.patch(url, config))
  }
}

export default api(axiosInstance);