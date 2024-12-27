import DotenvFlow from 'dotenv-flow';

DotenvFlow.config();
export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    FRONTEND_URL: process.env.FRONTEND_URL
};
