import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from 'src/Libraries/Axios';

class Api {
  public get<T = never, R = AxiosResponse<T>>(
    URI: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return Axios.get(URI, config);
  }

  public post<T = never, R = AxiosResponse<T>>(
    URI: string,
    body: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return Axios.post(URI, body, config);
  }

  public put<T = never, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return Axios.put<T, R>(url, data, config);
  }

  public delete<T = never, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return Axios.delete<T, R>(url, config);
  }
}

export default new Api();
