import refreshToken from './models/refreshToken';
import { IRefreshToken } from './types/refreshToken';

export interface IDataCreateToken {
  userID: string;
  token: string;
  expires: Date;
}
class RefreshTokenData {
  async createToken(data: IDataCreateToken): Promise<IRefreshToken> {
    const { userID, token, expires } = data;
    const createdToken = new refreshToken({ userID, token, expires });
    await createdToken.save();
    return createdToken;
  }

  async getOne(token: string) {
    if (!token) {
      throw new Error(`invalide token`);
    }
    const dbToken = refreshToken.findOne({ token: token });
    return dbToken;
  }

  async remove(token: string) {
    if (!token) {
      throw new Error('incorret token');
    }
    const dbToken = await refreshToken.remove({ token });
    return dbToken;
  }
}

export default new RefreshTokenData();
