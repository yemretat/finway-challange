import { Response } from 'express';

enum ErrorType {
  REDIS_ERROR = 'RedisError',
  SORT_ERROR = 'SortParamError',
  LANGUAGE_ERROR = "LanguageParamError",
  DATA_ERROR = "NewsDataError"
}
enum ResponseStatus {
    SUCCESS = 200,
    BAD_REQUEST = 400,
  }
enum StatusCode {
    SUCCESS = "true",
    FALSE = 'false',
  }

export abstract class ApiError extends Error {
  constructor(public type: ErrorType, public message: string = 'error',public status:number,public statusCode:string) {
    super(type);
  }

  public static handle(err: ApiError, res: Response) {
    return res.status(err.status).json({success:err.statusCode || 500 ,message:err.message || "Internal Server Error"})
  }
}
export class RedisMiddlewareError extends ApiError{
  constructor(message = "There is a problem due to Redis"){
    super(ErrorType.REDIS_ERROR,message,ResponseStatus.BAD_REQUEST,StatusCode.FALSE)
}
}

export class SortParamError extends ApiError{
    constructor(message = "Please give the correct sort param"){
        super(ErrorType.SORT_ERROR,message,ResponseStatus.BAD_REQUEST,StatusCode.FALSE)
    }
}

export class LanguageParamError extends ApiError{
  constructor(message = "Please give the correct language param"){
      super(ErrorType.LANGUAGE_ERROR,message,ResponseStatus.BAD_REQUEST,StatusCode.FALSE)
  }
}

export class DataError extends ApiError{
  constructor(message = "Cannot get the data"){
      super(ErrorType.DATA_ERROR,message,ResponseStatus.BAD_REQUEST,StatusCode.FALSE)
  }
}




