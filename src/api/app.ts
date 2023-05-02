import express from 'express'
import 'express-async-errors'
import quoteRouter from './routers/quoteRouter'

const app = express()
app.use(express.json())

app.use('/quotes', quoteRouter)

export default app