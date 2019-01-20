import express from 'express';

const setGlobalMiddleware = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

export default setGlobalMiddleware;