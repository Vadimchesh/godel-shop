import { Document } from 'mongoose';

export interface IRefreshToken extends Document {
  userId: string;
  token: string;
  created: Date;
}
