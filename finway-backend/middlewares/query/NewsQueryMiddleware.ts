import { webUrlType } from "../../data/types/LinkTypes";
import { Request, Response, NextFunction } from "express";
import BaseHelpers from "../../helpers/query/BaseHelpers";
import NewsMiddlewareHelpers from "../../helpers/query/NewsMiddlewareHelpers";
import { LanguageParamError, SortParamError } from "../../helpers/error/CustomError";

class NewsQueryMiddleware {
  async getNewsByQueryParams(req: Request, res: Response, next: NextFunction) { 
    const {language,sortBy="publishedAt",totalDisplayed,q} = req.query;
    let newsMiddlewareHelpers : BaseHelpers = new NewsMiddlewareHelpers()

    if(!newsMiddlewareHelpers.sortByHelper(sortBy as string)){
        next(new SortParamError())
    }
    if(!newsMiddlewareHelpers.languageHelper(language as string)){
        next(new LanguageParamError())
    }
    newsMiddlewareHelpers.getAllData(req,res,next)

  }
}
export default new NewsQueryMiddleware()
