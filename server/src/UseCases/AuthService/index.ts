import UserData from '../../repository/mongoose/UserData';
import { IAuthService, IAddNewUser } from '../layerInterface';
import UserValidateShema from '../ValidateService/UserValidateShema';
import bcrypt from 'bcryptjs';
import { IFuncResultModel } from '../../modals/index';
import { IUser } from '../../repository/mongoose/types/user';

class AuthService implements IAuthService {
  getUser = (email: string) => {
    return UserData.getOne(email);
  };

  addUser = async (data: IAddNewUser): Promise<IFuncResultModel<IUser>> => {
    try {
      const validatedData = await UserValidateShema.validate(data);
      if (!validatedData) {
        return { error: new Error(`Incorect data`) };
      }
      const currentEmailUser = await this.getUser(validatedData.email);
      if (currentEmailUser) {
        return { error: new Error('Incorect email') };
      }
      const hashPassword = await bcrypt.hash(validatedData.password, 8);
      const user: IUser = await UserData.createUser(validatedData.email, hashPassword);
      return { value: user };
    } catch (e) {
      return { error: new Error('User not added') };
    }
  };
}

export default new AuthService();
