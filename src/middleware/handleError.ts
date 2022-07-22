import { NextFunction, Request, Response } from 'express';

const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send({
    error,
  });
};
export default handleError;
