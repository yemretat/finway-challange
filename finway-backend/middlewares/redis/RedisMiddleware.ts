import { Request, Response, NextFunction } from "express";
import Logger from "../../helpers/logger/logger";
import { RedisMiddlewareError } from "../../helpers/error/CustomError";
export default class RedisMiddleware {
  redisClient: any;
  constructor(redis: any) {
    this.redisClient = redis;
  }

  cacheCheck(
    req: Request,
    res: Response,
    next: NextFunction,
    redisCacheMiddleware: RedisMiddleware
  ) {
    const key = redisCacheMiddleware.generateCacheKey(req.url);
    redisCacheMiddleware.redisClient.get(req.url, (err: any, data: any) => {
      if (err) {
        Logger.error(JSON.stringify(err));
        next(new RedisMiddlewareError())
      } else {
        // Check cached data is exist.
        if (data != null) {
          // Send cached data.
          Logger.info(`Response is sent from cache with key: ${key}`);
          res.status(200).json(JSON.parse(data));
        } else {
          // If there is no cached data then let leave the caching to the
          // final controller function.
          Logger.info(`Response is not sent from cache with key: ${key}`);
          next();
        }
      }
    });
  }

  generateCacheKey(url:string) {
    return `${url}`;
  }
}
