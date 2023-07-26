// server here
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import productrouter from './routers/products';
import userrouter from './routers/users';
import orderrouter from './routers/orders';
import cartrouter from './routers/carts'

dotenv.config({ path: '.env' })
const app = express()

// Use common 3rd-party middlewares
app.use(cors())
app.use(express.json())

app.use(productrouter);
  app.use(userrouter);
  app.use(orderrouter);
  app.use(cartrouter);


export default app