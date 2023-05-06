import { Router } from "express";
import QuoteController from "../controllers/QuoteController";

const router = Router()
const quoteController = new QuoteController()

router.get('/', quoteController.getAll)

export default router