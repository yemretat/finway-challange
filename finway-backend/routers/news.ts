import { Router } from "express";
import { INewsController } from "../controller/Abstract/INewsController";
import NewsController from "../controller/Concrete/NewsController";
import errorWrapper from "../helpers/error/errorWrapper";
import NewsQueryMiddleware from "../middlewares/query/NewsQueryMiddleware";
import { redisCacheMiddleware } from "../server";
class NewsRouter {
  router = Router();

  private _newsController: INewsController;

  constructor(newsController: INewsController) {
    this._newsController = newsController;
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.get(
      "/",
      (req, res, next) => {
        redisCacheMiddleware.cacheCheck(req, res, next, redisCacheMiddleware);
      },
      errorWrapper(NewsQueryMiddleware.getNewsByQueryParams),
      this._newsController.getAllNews
    );
  }
}
export default new NewsRouter(new NewsController()).router;
