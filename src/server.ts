import app from './app';
import config from './config/config';
import logger from './utils/logger';

const server = app.listen(config.PORT);

(() => {
    try {
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
