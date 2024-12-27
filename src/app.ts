import express, { Application, NextFunction, Request, Response } from 'express';
import path from 'path';
import router from './routes/api.routes';
import globalErrorHandler from './middleware/globalErrorHandler';
import responseMessage from './constants/responseMessage';
import httpError from './utils/httpError';
const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

// Routes
app.use('/api/v1', router);
// 404
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('Route'));
    } catch (error) {
        httpError(next, error, req, 404);
    }
});

// Global error handler
app.use(globalErrorHandler);
export default app;
