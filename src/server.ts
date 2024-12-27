import app from './app';
import config from './config/config';

const server = app.listen(config.PORT);

(() => {
    try {
        // eslint-disable-next-line no-console
        console.log(`Server running on port ${config.PORT}`);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        server.close((err) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.error(`APPLICATION_ERROR`, { meta: { err } });
            }
            process.exit(1);
        });
    }
})();
