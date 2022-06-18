import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TOKEN_KEY, API_KEY, API_ENDPOINT } from 'src/Reusables/Constants';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const authToken = localStorage.getItem(TOKEN_KEY);
  config.baseURL = `${API_ENDPOINT}`;
  config.headers = {
    'Content-Type': 'application/json',
    openapikey: API_KEY || '',
    Authorization: `Bearer ${authToken || ''}`
  };
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
