import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IApiAuth, ApiUserLogin } from '../layerInterface';

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  const { accessToken } = useTypedSelector(state => state.auth);
  const token = accessToken;
  if (token) {
    newConfig.headers['Authorization'] = 'Bearer ' + token;
  }
  return newConfig;
});
class ApiAuth implements IApiAuth {
  registration = async (email: string, password: string, passwordConfirmation: string): Promise<AxiosResponse> => {
    try {
      const succsessRegistration: AxiosResponse = await axios.post('/api//auth/registration', { email, password, passwordConfirmation });
      return succsessRegistration;
    } catch (e) {
      throw new Error(e);
    }
  };

  login = async (email: string, password: string): Promise<AxiosResponse<ApiUserLogin>> => {
    try {
      const response: AxiosResponse = await axios.post('/api/auth/login', { email, password });
      return response;
    } catch (e) {
      throw new Error(e);
    }
  };

  refresh = async (token: string): Promise<AxiosResponse> => {
    try {
      const response: AxiosResponse = await axios.post('/api/auth/refresh', { token });
      return response;
    } catch (e) {
      throw new Error(e);
    }
  };
}
export default new ApiAuth();
