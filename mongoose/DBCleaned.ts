import mongoose from "mongoose"
import connectToDatabase from "./connection"
import CategoryRepository from "../src/repositories/CategoryRepository"
import QuoteRepository from "../src/repositories/QuoteRepository"

export default async function DBCleaned() {
  connectToDatabase()
  const categoryRepository = new CategoryRepository()
  const quoteRepository = new QuoteRepository()
  await categoryRepository.deleteAll()
  await quoteRepository.deleteAll()
  mongoose.disconnect()
  console.log("[DBCLEANED] Database cleaned")
}

DBCleaned()