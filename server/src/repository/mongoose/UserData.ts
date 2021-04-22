import User from './models/user';

class UserData {
  async createUser(email: string, password: string) {
    const createdUser = new User({ email, password });
    await createdUser.save();
    return createdUser;
  }

  async getOneByEmail(email: string) {
    if (!email) {
      throw new Error('не корректный email');
    }
    const user = await User.findOne({ email });
    return user;
  }
  async getOneByID(_id: string) {
    if (!_id) {
      throw new Error('пользователь не найден ');
    }
    const user = await User.findOne({ _id });
    return user;
  }
}

export default new UserData();
