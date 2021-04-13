import { Document } from 'mongoose';
import { IUser } from '../types/user';

export interface IRefreshToken extends Document {
  userId: string;
  token: string;
  expires: Date;
  created: Date;
}
