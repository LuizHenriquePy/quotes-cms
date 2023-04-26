import ICategory from "./ICategory"

export default interface IQuote {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  content: string
  creator: string
  categoriesId: ICategory[]
}