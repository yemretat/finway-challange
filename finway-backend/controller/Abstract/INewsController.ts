import { Request, Response, NextFunction } from "express";


export interface INewsController {
  getAllNews(req: Request, res: Response, next: NextFunction): Promise<any>;
}
