import express from 'express';
import morgan from 'morgan';
import handleError from './middleware/handleError';
import notFound from './middleware/notFound';
import routes from './routes/index.routes';

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('dev'));

app.get('/ping', (req, res) => {
  res.status(200).send({
    message: 'pong',
  });
});

app.use('/api/v1', routes);

app.use(handleError);
app.use(notFound);

export default app;
