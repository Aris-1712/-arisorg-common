import { NextFunction, Request, Response } from "express";
declare const ErrorHandler: (error: Error, req: Request, res: Response, next: NextFunction) => void;
export { ErrorHandler };
