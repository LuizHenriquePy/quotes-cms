import QuotesODM from "../../repositories/QuotesODM"
import IQuote from "../interfaces/IQuote"
import IQuoteService from "../interfaces/IQuoteService"

export default class QuoteService implements IQuoteService {
  private model = QuotesODM

  public async getAll(): Promise<IQuote[]> {
    const quotes = await this.model.getAll()
    return quotes
  }

}