import statusCode from "../utils/statusCode"
import IPostService from "../interfaces/IQuoteService";
import { NextFunction, Request, Response } from "express";
import { mockQuotes } from "../../tests/mocks";
import QuoteController from "./QuoteController";
import QuoteService from "../service/QuoteService";
import IQuoteService from "../interfaces/IQuoteService"

describe('Controller QuoteController', () => {
  afterEach(() => jest.clearAllMocks())
  it('Return all quotes', async () => {
    const json = jest.fn()
    const res = {
      status: jest.fn(() => ({ json }))
    } as unknown as Response
    const req = jest.fn() as unknown as Request
    const next  = jest.fn() as unknown as NextFunction
    const spyQuoteService = jest.spyOn(QuoteService.prototype, "getAll")
      .mockResolvedValue(mockQuotes)

    await new QuoteController(req, res, next).getAll()

    expect(res.status).toHaveBeenCalledWith(statusCode.ok)
    expect(json).toHaveBeenCalledWith(mockQuotes)
    expect(spyQuoteService).toHaveBeenCalledTimes(1)
  })
});