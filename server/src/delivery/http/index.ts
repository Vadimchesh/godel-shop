import express from 'express';
import routePost from './Post';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('api/posts', routePost);

export default app;
