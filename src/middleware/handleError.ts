import { NextFunction, Request, Response } from 'express';

const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.name === 'ZodError') {
    return res.status(400).send({
      error,
    });
  }
  res.status(500).send({
    error,
  });
};
export default handleError;
