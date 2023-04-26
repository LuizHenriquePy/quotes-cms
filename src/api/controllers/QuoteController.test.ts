import statusCode from "../utils/statusCode"
import IPostService from "../interfaces/IQuoteService";
import { NextFunction, Request, Response } from "express";
import { mockQuotes } from "../tests/mocks";
import QuoteController from "./QuoteController";

describe('Controller QuoteController', () => {
  afterEach(() => jest.clearAllMocks())
  it('retorna todos os posts independente da categoria', async () => {
    const json = jest.fn()
    const status = jest.fn().mockImplementation((code) => ({ json }))
    const res = { status } as unknown as Response
    const service: IPostService = {
      getAll: jest.fn().mockResolvedValue(mockQuotes)
    }
    const req = jest.fn() as unknown as Request
    const next  = jest.fn() as unknown as NextFunction

    await new QuoteController(service, res, req, next).getAll()

    expect(status).toHaveBeenCalledWith(statusCode.ok)
    expect(json).toHaveBeenCalledWith(mockQuotes)
    expect(service.getAll).toHaveBeenCalledTimes(1)
  })
});