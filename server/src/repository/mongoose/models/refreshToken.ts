import { model, Schema } from 'mongoose';
import { IRefreshToken } from '../types/refreshToken';

const refreshTokenShema: Schema = new Schema({
  userID: { type: String },
  token: String,
  expires: Date,
  created: { type: Date, default: Date.now },
});

export default model<IRefreshToken>('RefreshToken', refreshTokenShema);
