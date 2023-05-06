import { Model, Schema, model, models } from "mongoose";
import ICategory from "../interfaces/ICategory";
import ICategoryRepository from "../interfaces/ICategoryRepository";
import AbstractODM from "./AbstractODM";

export default class CategoryRepository extends AbstractODM implements ICategoryRepository {
  public model: Model<ICategory>

  constructor() {
    super()
    this.model = this.categoryModel
  }

  public async getAll(): Promise<ICategory[]> {
    const quotes = await this.model.find()
    return quotes
  }

  public async addMany(categories: ICategory[]): Promise<ICategory[]> {
    const result = await this.model.insertMany(categories)
    return result
  }
}