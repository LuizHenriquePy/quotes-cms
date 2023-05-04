import { NextFunction, Request, Response } from "express";
import ErrorGenerator from "../utils/ErrorGenerator";
import statusCode from "../utils/statusCode";

export default (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error: ', error)
  if (error.type) {
    return res
      .status(error.type)
      .json({ message: error.message })
  }
  return res
    .status(statusCode.internalServerError)
    .json({ message: 'Internal server error' })
}