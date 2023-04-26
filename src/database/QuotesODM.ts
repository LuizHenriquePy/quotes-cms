import { Model, Schema, model } from "mongoose";
import IQuote from "../api/interfaces/IQuote";

class QuotesODM {
  private model: Model<IQuote>

  constructor() {
    const schema = new Schema<IQuote>({
      categoriesId: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
      content: { type: String, required: true },
      creator: { type: String, required: true }
    }, { timestamps: true })
    this.model = model<IQuote>('Quote', schema)
  }

  public async getAll(): Promise<IQuote[]> {
    const quotes = await this.model.find().populate('categoriesId')
    return quotes
  }
}

export default new QuotesODM()