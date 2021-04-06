import express, { Router } from 'express';
import UseCases from '../../UseCases';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';

const AuthRouter: Router = express.Router();

AuthRouter.post('/registration', async (req, res) => {
  try {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Uncorrect request', errors });
    }
    const candidate = await UseCases.AuthService.getUser(email);
    if (candidate) {
      return res.status(400).json({ message: `User with email ${email} already exist` });
    }
    const user = UseCases.AuthService.addUser(email, password);
    res.json({ message: 'User was created' });
  } catch (e) {
    res.send({ message: 'Server error' });
  }
});

AuthRouter.post('/login', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Uncorrect request', errors });
  }
  try {
    const { email, password } = req.body;
    const user = await UseCases.AuthService.getUser(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user.id }, `${process.env.SECRET_KEY}`, {
      expiresIn: '1h',
    });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

export default AuthRouter;
