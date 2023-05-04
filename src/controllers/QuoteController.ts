import { NextFunction, Request, Response } from "express";
import statusCode from "../utils/statusCode";
import IQuoteService from "../interfaces/IQuoteService";
import QuoteRepository from "../repositories/QuoteRepository";
import QuoteService from "../service/QuoteService";

export default class QuoteController {
  private quoteService: IQuoteService
  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction
  ) {
    const repository = new QuoteRepository()
    this.quoteService = new QuoteService(repository)
  }

  public async getAll() {
    const quotes = await this.quoteService.getAll()
    return this.res.status(statusCode.ok).json(quotes)
  }
}