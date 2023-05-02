import { NextFunction, Request, Response } from "express";
import statusCode from "../utils/statusCode";
import IQuoteService from "../interfaces/IQuoteService";

export default class QuoteController {
  constructor(
    private service: IQuoteService,
    private req: Request,
    private res: Response,
    private next: NextFunction
  ) {}

  public async getAll() {
    const quotes = await this.service.getAll()
    return this.res.status(statusCode.ok).json(quotes)
  }
}