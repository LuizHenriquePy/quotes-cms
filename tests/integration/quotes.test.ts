import request from "supertest"
import app from "../../src/app"
import { mockQuotes } from "../mocks"
import statusCode from "../../src/utils/statusCode"
import QuoteRepository from "../../src/repositories/QuoteRepository"

describe('[E2E] Quotes', () => {
  afterEach(() => jest.clearAllMocks())

  it('Testa se é possível retornar todas as Quotes', async () => {
    const spyModel = jest.spyOn(QuoteRepository.prototype, 'getAll')
      .mockImplementation(() => Promise.resolve(mockQuotes))
    
      const result = await request(app).get('/quotes')

    expect(result.status).toEqual(statusCode.ok)
    expect(result.body).toEqual(mockQuotes)
  })
})