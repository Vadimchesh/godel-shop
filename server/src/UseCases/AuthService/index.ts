import UserData from '../../repository/mongoose/UserData';
import RefreshTokenData from '../../repository/mongoose/RefreshTokenData';
import { IAuthService, IAddNewUser, ILogin, ILoginTokens, IissueTokenPair, IRefreshTokenUser } from '../layerInterface';
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
      const hashPassword = await bcrypt.hash(validatedData.password, 8);
      const user: IUser = await UserData.createUser(validatedData.email, hashPassword);
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
      const { refreshToken, token } = await this.issueTokenPair(currenUser._id);

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
    const { refreshTokenUser } = userToken;
    const { token } = await RefreshTokenData.getOne(refreshTokenUser);
    if (!token) {
      return { error: new Error('Incorect data token') };
    }
    const decoded = jwt.decode(token, { complete: true });
    const expireTime: number = decoded.payload.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    let refreshToken: string = token;
    if (currentTime < expireTime) {
      refreshToken = await this.generateNewRefreshToken(decoded?.userId);
    }
    return {
      value: {
        refreshToken: refreshToken,
        accessToken: token,
      },
    };
  };

  private issueTokenPair = async (userId: string): Promise<IissueTokenPair> => {
    const accessToken = this.generateNewAccessToken(userId);
    const refreshToken = await this.generateNewRefreshToken(userId);

    return {
      token: accessToken,
      refreshToken: refreshToken,
    };
  };

  private generateNewAccessToken = (userId: string) => {
    const accessToken = jwt.sign({ id: userId }, `${process.env.SECRET_KEY}`, { expiresIn: 60 * 15 });
    return accessToken;
  };

  private generateNewRefreshToken = async (userId: string) => {
    const newRefreshToken = jwt.sign({ id: userId }, `${process.env.SECRET_KEY}`, { expiresIn: '10 days' });
    const data = {
      userId,
      token: newRefreshToken,
    };
    const { token } = await RefreshTokenData.createToken(data);
    return token;
  };
}
export default new AuthService();
