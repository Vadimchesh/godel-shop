import UserData from '../../repository/mongoose/UserData';
import { IAuthService } from '../layerInterface';
import bcrypt from 'bcryptjs';

class AuthService implements IAuthService {
  getUser = (email: string) => {
    return UserData.getOne(email);
  };
  addUser = async (email: string, password: string) => {
    const hashPassword = await bcrypt.hash(password, 8);
    return UserData.createUser(email, hashPassword);
  };
}

export default new AuthService();
