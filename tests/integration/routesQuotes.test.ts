import request from "supertest"
import app from "../../src/app"
import { mockQuotes } from "../mocks"
import statusCode from "../../src/utils/statusCode"
import QuoteRepository from "../../src/repositories/QuoteRepository"

describe('[ INTEGRATION ] Routes quotes', () => {
  afterEach(() => jest.clearAllMocks())

  it('Return all quotes', async () => {
    const spyModel = jest.spyOn(QuoteRepository.prototype, 'getAll')
      .mockImplementation(() => Promise.resolve(mockQuotes))
    
    const result = await request(app).get('/quotes')

    expect(result.status).toEqual(statusCode.ok)
    expect(result.body).toEqual(mockQuotes)
  })

  it('Calls ErrorGenerator object when database fails', async () => {
    const spyModel = jest.spyOn(QuoteRepository.prototype, 'getAll')
      .mockImplementation(() => Promise.reject())

    const result = await request(app).get('/quotes')

    expect(result.status).toEqual(statusCode.internalServerError)
    expect(result.body.message).toEqual('Error when trying to connect database')
  })

})