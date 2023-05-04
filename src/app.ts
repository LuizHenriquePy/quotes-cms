import express from 'express'
import 'express-async-errors'
import quoteRouter from './routers/quoteRouter'
import errorMiddleware from './middlewares/errorMiddleware'

const app = express()
app.use(express.json())

app.use('/quotes', quoteRouter)

app.use(errorMiddleware)

export default app