/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import setGlobalMiddleware from './middleware';
import restRouter from './resources';

const app = express();
const url = 'mongodb://localhost/pepejuan';
mongoose.connect(url);

mongoose.connection.once('open', () => {
  console.log('Connection has been made');
}).on('error', (error) => {
  console.log('Connection not possible', error);
});

setGlobalMiddleware(app);

app.use('/api', restRouter);

export default app;