import express, { Request, Response, Router } from 'express';
import UseCases from '../../UseCases';

const AuthRouter: Router = express.Router();

AuthRouter.post('/registration', async (req: Request, res: Response) => {
  const { value, error } = await UseCases.AuthService.addUser(req.body);
  if (!error) {
    return res.status(200).json(value);
  }
  return res.status(500).json(error.message || new Error('UseCases undefined error'));
});

export default AuthRouter;
