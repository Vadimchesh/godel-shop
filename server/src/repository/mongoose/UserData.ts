import User from './models/user';

class UserData {
  async createUser(email: string, password: string) {
    const createdUser = new User({ email, password });
    await createdUser.save();
    return createdUser;
  }

  async getOne(email: string) {
    if (!email) {
      throw new Error('не корректный email');
    }
    const user = await User.findOne({ email });
    return user;
  }
}

export default new UserData();
