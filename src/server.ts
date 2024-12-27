import app from './app';
import config from './config/config';
import databaseService from './services/database.service';
import logger from './utils/logger';

const server = app.listen(config.PORT);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
    try {
        // Database connection
        const connection = await databaseService.connect();

        logger.info('DATABASE_CONNECTED', {
            meta: {
                name: connection.name
            }
        });
        // Log
        logger.info('APPLICATION_STARTED', {
            meta: {
                PORT: config.PORT
            }
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        server.close((err) => {
            if (err) {
                logger.error(`APPLICATION_ERROR`, { meta: { err } });
            }
            process.exit(1);
        });
    }
})();
