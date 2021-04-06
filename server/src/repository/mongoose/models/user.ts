import { IUser } from '../types/user';
import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

export default model<IUser>('User', userSchema);
