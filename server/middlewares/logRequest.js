import { requestLogger } from '../config/logger.js';

export const logRequest = (req, res, next) => {
  requestLogger.info('incoming request', { url: req.originalUrl, method: req.method, host: req.hostname });
  next();
};
