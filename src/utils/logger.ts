import util from 'util';
import { createLogger, transports, format } from 'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
import { red, blue, yellow, green, magenta } from 'colorette';
import * as sourceMapSupport from 'source-map-support';
import config from '../config/config';
import { EApplicationEnvironment } from '../constants/application';

// Linking the trace support
sourceMapSupport.install();

const colorizeLevel = (level: string) => {
    switch (level) {
        case 'ERROR':
            return red(level);
        case 'INFO':
            return blue(level);
        case 'WARN':
            return yellow(level);
        default:
            return level;
    }
};

const consoleLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info;
    const customLevel = colorizeLevel(level.toUpperCase());
    const customMessage = message;
    const customTimestamp = green(timestamp as string);
    const customMeta = util.inspect(meta, {
        showHidden: false,
        depth: null,
        colors: true
    });

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const customLog = `${customLevel} [${customTimestamp}] ${customMessage}\n${magenta(`META`)} ${customMeta}\n`;
    return customLog;
});

const consoleTransport = (): Array<ConsoleTransportInstance> => {
    if (config.NODE_ENV === EApplicationEnvironment.DEVELOPMENT) {
        return [
            new transports.Console({
                level: 'info',
                format: format.combine(format.timestamp(), consoleLogFormat)
            })
        ];
    }
    return [];
};

export default createLogger({
    defaultMeta: {
        meta: {}
    },
    transports: [...consoleTransport()]
});
