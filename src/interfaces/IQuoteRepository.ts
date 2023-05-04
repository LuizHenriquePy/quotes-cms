import IQuote from "./IQuote";

export default interface IQuoteRepository {
  getAll(): Promise<IQuote[]>
}