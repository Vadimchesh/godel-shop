import express, { Express } from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(express.json());
app.use(postRoutes);

export default app;
