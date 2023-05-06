import mongoose from "mongoose"
import ICategory from "../src/interfaces/ICategory"
import IQuote from "../src/interfaces/IQuote"
import CategoryRepository from "../src/repositories/CategoryRepository"
import QuoteRepository from "../src/repositories/QuoteRepository"
import connectToDatabase from "./connection"

const categoriesSeed: ICategory[] = [
  {
    name: 'história'
  },
  {
    name: 'filosofia'
  },
  {
    name: 'humor'
  }
]
async function main() {
  connectToDatabase()
  const categoryRepository = new CategoryRepository()
  const quoteRepository = new QuoteRepository()
  console.log('categories')
  const categories = await categoryRepository.addMany(categoriesSeed) as any
  const quotesSeed: IQuote[] = [
    {
      categoriesId: [categories[0].id, categories[1].id],
      content: "Nada é permanente, exceto a mudança",
      creator: "Heráclito"
    },
    {
      categoriesId: [categories[1].id],
      content: "Só sei que nada sei",
      creator: "Sócrates"
    },
    {
      categoriesId: [categories[2].id],
      content: "Porque a galinha atravessou a rua? para chegar do outro lado",
      creator: "anônimo"
    }
  ]
  await quoteRepository.addMany(quotesSeed)
  mongoose.disconnect()
  console.log("[SEEDS] Data added to the database!")
}

main()