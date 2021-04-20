import express from 'express';
import routePost from './Post';
import AuthRouter from './Auth';
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api');
app.use('/posts', routePost);
app.use('/auth', AuthRouter);

export default app;
