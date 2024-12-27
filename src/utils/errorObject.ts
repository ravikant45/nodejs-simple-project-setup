import { Request } from 'express';
import { THttpError } from '../types/types';
import responseMessage from '../constants/responseMessage';

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (error: Error | unknown, req: Request, errorStatusCode: number): THttpError => {
    const errorObject: THttpError = {
        success: false,
        responseStatusCode: errorStatusCode,
        message: error instanceof Error ? error.message || responseMessage.SOMETHING_WENT_WRONG : responseMessage.SOMETHING_WENT_WRONG,
        request: {
            method: req.method,
            url: req.originalUrl
        },
        data: null,
        trace: error instanceof Error ? { error: error.stack } : null
    };

    // Log

    return errorObject;
};
