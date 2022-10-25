import express from 'express';
import 'express-async-errors';
import mainRouter from './routes';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());
app.use(mainRouter);
app.use(errorHandler);

export default app;
