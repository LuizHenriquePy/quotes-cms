import request from "supertest"
import app from "../../app"
import QuotesODM from "../../../database/QuotesODM"
import { mockQuotes } from "../mocks"
import statusCode from "../../utils/statusCode"

describe('[E2E] Quotes', () => {
  afterEach(() => jest.clearAllMocks())

  it('Testa se é possível retornar todas as Quotes', async () => {
    const spyModel = jest.spyOn(QuotesODM, 'getAll').mockImplementation(() => Promise.resolve(mockQuotes))
    const result = await request(app).get('/quotes')

    expect(result.status).toEqual(statusCode.ok)
    expect(result.body).toEqual(mockQuotes)
  })
})