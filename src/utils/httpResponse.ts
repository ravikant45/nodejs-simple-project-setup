import { Request, Response } from 'express';
import { THttpResponse } from '../types/types';

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown = null): void => {
    const response: THttpResponse = {
        success: true,
        responseStatusCode: responseStatusCode,
        message: responseMessage,
        request: {
            method: req.method,
            url: req.originalUrl
        },
        data: data
    };

    // Log

    res.status(responseStatusCode).json(response);
};
