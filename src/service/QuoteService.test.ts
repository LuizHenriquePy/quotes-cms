import QuoteService from "./QuoteService"
import { mockQuotes } from "../../tests/mocks"
import InMemoryQuoteRepository from "../../tests/repositories/InMemoryQuoteRepository"
import IQuoteRepository from "../interfaces/IQuoteRepository"
import ErrorGenerator from "../utils/ErrorGenerator"
import statusCode from "../utils/statusCode"

describe('Service QuoteService', () => {

  it('Return all quotes', async () => {
    const inMemoryQuoteRepository = new InMemoryQuoteRepository()
    const quoteService = new QuoteService(inMemoryQuoteRepository)

    const result = await quoteService.getAll()

    expect(result).toEqual(mockQuotes)
  })

  it('Calls ErrorGenerator object when database fails', async () => {
    const quoteService = new QuoteService({
      getAll: () => Promise.reject()
    } as IQuoteRepository)

    try {
      await quoteService.getAll() as unknown as ErrorGenerator
    } catch (error: any) {
      expect(error).toBeInstanceOf(ErrorGenerator)
      expect(error.message).toEqual('Error when trying to connect database')
      expect(error.type).toEqual(statusCode.internalServerError)
    }
  })

})