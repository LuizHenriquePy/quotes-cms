import { Model, Schema, model } from "mongoose";
import ICategory from "../api/interfaces/ICategory";

class CategoriesODM {
  private model: Model<ICategory>

  constructor() {
    const schema = new Schema<ICategory>({
      name: { type: String, required: true }
    })
    this.model = model<ICategory>('Category', schema)
  }

  public async getAll(): Promise<ICategory[]> {
    const quotes = await this.model.find()
    return quotes
  }
}

export default new CategoriesODM()