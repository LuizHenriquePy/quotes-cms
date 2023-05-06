import { NextFunction, Request, Response } from "express";
import statusCode from "../utils/statusCode";
import IQuoteService from "../interfaces/IQuoteService";
import QuoteRepository from "../repositories/QuoteRepository";
import QuoteService from "../service/QuoteService";

export default class QuoteController {
  private quoteService: IQuoteService
  constructor() {
    const repository = new QuoteRepository()
    this.quoteService = new QuoteService(repository)
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    const quotes = await this.quoteService.getAll()
    return res.status(statusCode.ok).json(quotes)
  }
}