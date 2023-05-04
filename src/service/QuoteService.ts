import IQuote from "../interfaces/IQuote"
import IQuoteRepository from "../interfaces/IQuoteRepository"
import IQuoteService from "../interfaces/IQuoteService"

export default class QuoteService implements IQuoteService {
  constructor(
    private quoteRepository: IQuoteRepository
  ) {}

  public async getAll(): Promise<IQuote[]> {
    const quotes = await this.quoteRepository.getAll()
    return quotes
  }
}