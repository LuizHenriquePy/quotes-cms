import { Model, Schema, model, models } from "mongoose";
import IQuote from "../interfaces/IQuote";
import IQuoteRepository from "../interfaces/IQuoteRepository";

export default class QuoteRepository implements IQuoteRepository {
  private model: Model<IQuote>

  constructor() {
    const schema = new Schema<IQuote>({
      categoriesId: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
      content: { type: String, required: true },
      creator: { type: String, required: true }
    }, { timestamps: true })
    this.model = models['Quote'] || model<IQuote>('Quote', schema)
  }

  public async getAll(): Promise<IQuote[]> {
    const quotes = await this.model.find().populate('categoriesId')
    return quotes
  }
}