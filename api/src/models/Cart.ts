/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document, Model, Types } from 'mongoose'

//add types for mongoose
export type CartDocument = Document & {
  userId: string  
  category: string
  name: string
  price: number
  imageLink: string
  description: string 
}

export interface CartTypeModel extends Model<CartDocument> {}

const CartSchema = new mongoose.Schema({
    userId:{
        type: String,        
        required: true
    },
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
}, {collection: 'cart'})

export default mongoose.model(
  'cart',
  CartSchema
)
