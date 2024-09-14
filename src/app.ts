require('dotenv').config();
require('express-async-errors');
import { Request, Response } from 'express'
import errorHandlerMiddleware from './middleware/error-handler';
import mainRoute  from './routes/main';
import express from 'express'

const notFoundMiddleware = (_req:Request, _res:Response) => 
  _res.status(404).json({erors: [{ message: 'Route not Found' }]});

const start = async () => {
  try {
    const app = express();
    app.use(express.static('./public'));
    app.use(express.json());
    app.use('/api/v1', mainRoute);
    app.use(notFoundMiddleware);
    app.use(errorHandlerMiddleware);
    
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
 
start();
