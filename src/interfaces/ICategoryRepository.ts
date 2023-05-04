import ICategory from "./ICategory";

export default interface ICategoryRepository {
  getAll(): Promise<ICategory[]>
}