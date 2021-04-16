import UserData from '../../repository/mongoose/UserData';
import { IAuthService, IAddNewUser, ILogin, ILoginTokens, IissueTokenPair, IRefreshTokenUser, ITokenSub } from '../layerInterface';
import UserValidateShema from '../ValidateService/UserValidateShema';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
      const hashPassword = await bcrypt.hash(validatedData?.password, 8);
      const user: IUser = await UserData.createUser(validatedData?.email, hashPassword);
      return { value: user };
    } catch (e) {
      return { error: new Error('User not added') };
    }
  };

  login = async (data: ILogin): Promise<IFuncResultModel<ILoginTokens>> => {
    try {
      const currenUser = await this.getUser(data.email);
      if (!currenUser.email) {
        return { error: new Error('Incorect email') };
      }
      const hashPassword = bcrypt.compareSync(data.password, currenUser.password);
      if (!hashPassword) {
        return { error: new Error('Incorect password') };
      }
      const { refreshToken, token } = await this.issueTokenPair(currenUser?._id);

      return {
        value: {
          refreshToken: refreshToken,
          accessToken: token,
        },
      };
    } catch (e) {
      return { error: new Error(`You have not access to service ${e}`) };
    }
  };

  refresh = async (userToken: IRefreshTokenUser): Promise<IFuncResultModel<ILoginTokens>> => {
    try {
      const { refreshTokenUser } = userToken;
      const decoded = jwt.verify(refreshTokenUser, `${process.env.SECRET_KEY}`) as ITokenSub;
      const { token, refreshToken } = this.issueTokenPair(decoded?.id);
      return {
        value: {
          refreshToken: refreshToken,
          accessToken: token,
        },
      };
    } catch (e) {
      {
        return { error: new Error(`You have not access to service ${e}`) };
      }
    }
  };

  private issueTokenPair = (userId: string) => {
    const accessToken = jwt.sign({ id: userId }, process.env.SET_ACCESS_TOKEN, { expiresIn: 60 * 15 });
    const refreshToken = jwt.sign({ id: userId }, process.env.SECRET_KEY, { expiresIn: '10 days' });
    return {
      token: accessToken,
      refreshToken: refreshToken,
    };
  };
}

export default new AuthService();
