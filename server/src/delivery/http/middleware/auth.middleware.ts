import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: string;
  }
}

interface IDecoded {
  id: string;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      throw new Error();
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Auth error' });
    }
    const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`) as IDecoded;

    req.user = decoded?.id;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Auth error' });
  }
};

export default authMiddleware;
