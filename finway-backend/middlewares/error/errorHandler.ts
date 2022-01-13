import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../../helpers/error/CustomError';
import Logger from '../../helpers/logger/logger';



export function unCoughtErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  ApiError.handle(err,res)

  const error: object = { Name: err.type, Error:err };

  Logger.error(JSON.stringify(error));

}


