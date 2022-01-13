import { Request, Response, NextFunction } from 'express';

export default (execution: any) => (req: Request, res: Response, next: NextFunction) => {
  return execution(req, res, next).catch(next);
};
