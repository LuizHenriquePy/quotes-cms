import { Model, Schema, model, models } from "mongoose"
import ICategory from "../interfaces/ICategory"
import IQuote from "../interfaces/IQuote"

export default class AbstractODM {
  public quoteModel: Model<IQuote>
  public categoryModel: Model<ICategory>
  constructor() {
    const quoteSchema = new Schema<IQuote>({
      categoriesId: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
      content: { type: String, required: true },
      creator: { type: String, required: true }
    }, { timestamps: true })
    this.quoteModel = models['Quote'] || model<IQuote>('Quote', quoteSchema)
    const categorySchema = new Schema<ICategory>({
      name: { type: String, required: true }
    })
    this.categoryModel = models['Category'] || model<ICategory>('Category', categorySchema)
  }
}