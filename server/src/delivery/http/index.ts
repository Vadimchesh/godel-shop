import express from 'express';
import routePost from './Post';
import AuthRouter from './Auth';
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routePost);
app.use('/api/auth', AuthRouter);

export default app;
