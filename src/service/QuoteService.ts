import IQuote from "../interfaces/IQuote"
import IQuoteRepository from "../interfaces/IQuoteRepository"
import IQuoteService from "../interfaces/IQuoteService"
import ErrorGenerator from "../utils/ErrorGenerator"
import statusCode from "../utils/statusCode"

export default class QuoteService implements IQuoteService {
  constructor(
    private quoteRepository: IQuoteRepository
  ) {}

  public async getAll(): Promise<IQuote[]> {
    try {
      const quotes = await this.quoteRepository.getAll()
      return quotes
    } catch (error) {
      throw new ErrorGenerator(
        'Error when trying to connect database',
        statusCode.internalServerError,
        error as Error
      )
    }
  }
}