import { Request, Response } from 'express';
import { THttpResponse } from '../types/types';
import logger from './logger';

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
    logger.info('CONTROLLER_RESPONSE', { meta: { response } });
    res.status(responseStatusCode).json(response);
};
