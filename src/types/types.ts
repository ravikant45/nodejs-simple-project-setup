export type THttpResponse = {
    success: boolean;
    responseStatusCode: number;
    message: string;
    request: {
        method: string | null;
        url: string | null;
    };
    data: unknown;
};

export type THttpError = {
    success: boolean;
    responseStatusCode: number;
    message: string;
    request: {
        method: string | null;
        url: string | null;
    };
    data: unknown;
    trace: object | null;
};
