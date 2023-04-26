import { Model } from "mongoose"
import IQuote from "../interfaces/IQuote"
import QuoteService from "./QuoteService"
import QuotesODM from "../../database/QuotesODM"
import { mockQuotes } from "../tests/mocks"

describe('Service QuoteService', () => {
  it('Retornar todas as citações', async () => {
    const spyModel = jest.spyOn(QuotesODM, 'getAll').mockImplementation(() => Promise.resolve(mockQuotes)) 

    const result = await new QuoteService().getAll()

    expect(result).toEqual(mockQuotes)
  })
  // it('Chama o objeto ErrorGenerator quando banco de dados falha')
})