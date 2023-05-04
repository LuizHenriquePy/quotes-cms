import { NextFunction, Request, Response, Router } from "express";
import QuoteController from "../controllers/QuoteController";
import QuoteService from "../service/QuoteService";

const router = Router()

router.get(
  '/',
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => new QuoteController(req, res, next).getAll()
)

export default router