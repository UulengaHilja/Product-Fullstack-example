/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document, Model } from 'mongoose'

//add types for mongoose
export type ProductDocument = Document & {  
  category: string
  name: string
  price: number
  imageLink: string
  description: string 
}

export interface ProductTypeModel extends Model<ProductDocument> {}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }  
}, {collection: 'product'})

export default mongoose.model(
  'product',
  ProductSchema
)
