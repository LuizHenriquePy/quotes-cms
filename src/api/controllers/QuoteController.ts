import { NextFunction, Request, Response } from "express";
import statusCode from "../utils/statusCode";
import IQuoteService from "../interfaces/IQuoteService";

export default class QuoteController {
  private service: IQuoteService
  private res: Response
  private req: Request
  private next: NextFunction

  constructor(
    service: IQuoteService,
    res: Response,
    req: Request,
    next: NextFunction
  ) {
    this.service = service
    this.res = res
    this.req = req
    this.next = next
  }

  public async getAll() {
    const posts = await this.service.getAll()
    return this.res.status(statusCode.ok).json(posts)
  }
}