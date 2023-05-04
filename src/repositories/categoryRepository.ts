import { Model, Schema, model, models } from "mongoose";
import ICategory from "../interfaces/ICategory";
import ICategoryRepository from "../interfaces/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private model: Model<ICategory>

  constructor() {
    const schema = new Schema<ICategory>({
      name: { type: String, required: true }
    })
    this.model = models['Category'] || model<ICategory>('Category', schema)
  }

  public async getAll(): Promise<ICategory[]> {
    const quotes = await this.model.find()
    return quotes
  }
}

export default new CategoryRepository()