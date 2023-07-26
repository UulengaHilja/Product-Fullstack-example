import express from 'express'

import {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct  
} from '../controllers/product'


const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.post('/product', createProduct)

router.get('/product', getProduct)

router.get('/product/:id', getProductById)
router.put('/product/:id', updateProduct)

router.delete('/product/:id', deleteProduct);

 
export default router