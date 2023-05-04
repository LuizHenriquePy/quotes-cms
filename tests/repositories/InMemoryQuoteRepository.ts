import IQuote from "../../src/interfaces/IQuote";
import IQuoteRepository from "../../src/interfaces/IQuoteRepository";
import { mockQuotes } from "../mocks";

export default class InMemoryQuoteRepository implements IQuoteRepository {
  public async getAll(): Promise<IQuote[]> {
    return Promise.resolve(mockQuotes)
  }
  
}