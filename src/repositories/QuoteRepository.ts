import { Model, Schema, model, models } from "mongoose";
import IQuote from "../interfaces/IQuote";
import IQuoteRepository from "../interfaces/IQuoteRepository";
import AbstractODM from "./AbstractODM";

export default class QuoteRepository extends AbstractODM implements IQuoteRepository {
  private model: Model<IQuote>

  constructor() {
    super()
    this.model = this.quoteModel
    /* const schema = new Schema<IQuote>({
      categoriesId: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
      content: { type: String, required: true },
      creator: { type: String, required: true }
    }, { timestamps: true })
    this.model = models['Quote'] || model<IQuote>('Quote', schema) */
  }

  public async getAll(): Promise<IQuote[]> {
    const quotes = await this.model.find().populate('categoriesId')
    return quotes
  }

  public async addMany(quotes: IQuote[]): Promise<IQuote[]> {
    const result = await this.model.insertMany(quotes)
    return result
  }
}