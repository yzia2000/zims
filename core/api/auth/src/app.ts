import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import lms from './routes/lms';

const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

app.use('/school', lms);

app.get('/', (_req, res) => {
  res.send('Welcome to ZiMS Classroom API');
});

export default app;
