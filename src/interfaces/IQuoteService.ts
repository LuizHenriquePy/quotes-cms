import IQuote from "./IQuote";

export default interface IQuoteService {
  getAll(): Promise<IQuote[]>
}