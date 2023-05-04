import { Model } from "mongoose"
import IQuote from "../interfaces/IQuote"
import QuoteService from "./QuoteService"
import { mockQuotes } from "../../tests/mocks"
import InMemoryQuoteRepository from "../../tests/repositories/InMemoryQuoteRepository"

describe('Service QuoteService', () => {
  it('Retornar todas as citações', async () => {
    const inMemoryQuoteRepository = new InMemoryQuoteRepository()
    const quoteService = new QuoteService(inMemoryQuoteRepository)

    const result = await quoteService.getAll()

    expect(result).toEqual(mockQuotes)
  })
  // it('Chama o objeto ErrorGenerator quando banco de dados falha')
})