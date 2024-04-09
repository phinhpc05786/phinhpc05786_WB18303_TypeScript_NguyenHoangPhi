import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import { json } from 'body-parser';
import { UserController } from './controller';

const app = express();

app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
app.use('/route', router);

router.get('/', (request: Request, response: Response) => { 
  response.send('Hello world Route with Nodemon 1!');
});

router.get('/users', UserController.users);

router.post('/users/create', UserController.create);

export default app;