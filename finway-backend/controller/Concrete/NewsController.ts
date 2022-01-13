import { Request, Response, NextFunction } from "express";
import { redisCache } from "../../config/config";
import { QueryResponse } from "../../data/types/LinkTypes";
import { redisCacheMiddleware } from "../../server";
import { INewsController } from "../Abstract/INewsController";

export default class NewsController implements INewsController {
  async getAllNews(req: Request, res: QueryResponse, next: NextFunction) {
     await redisCacheMiddleware.redisClient.setex(req.url,redisCache.cache_time,JSON.stringify(res.advanceQueryResults))
      return res
      .status(200)
      .json(res.advanceQueryResults)
  }
}
