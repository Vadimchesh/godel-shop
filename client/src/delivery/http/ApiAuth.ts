import axios, { AxiosResponse } from 'axios';
import { IApiAuth } from '../layerInterface';

class ApiAuth implements IApiAuth {
  registration = async (email: string, password: string): Promise<AxiosResponse> => {
    try {
      const succsessRegistration: AxiosResponse = await axios.post('/auth/registration', { email, password });
      return succsessRegistration;
    } catch (e) {
      throw new Error(e);
    }
  };

  login = async (email: string, password: string): Promise<AxiosResponse> => {
    try {
      const user: AxiosResponse = await axios.post('/auth/login', { email, password });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  };
}
export default new ApiAuth();
