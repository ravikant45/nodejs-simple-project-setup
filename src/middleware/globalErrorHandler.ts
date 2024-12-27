import { NextFunction, Request, Response } from 'express';
import { THttpError } from '../types/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (error: THttpError, _: Request, res: Response, __: NextFunction) => {
    res.status(error.responseStatusCode).json(error);
};
