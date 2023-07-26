/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document, Model, Types } from 'mongoose'

//add types for mongoose
export type OrderDocument = Document & {
  userId: string  
  category: string
  name: string
  price: number
  imageLink: string
  description: string,
  quantity: number,
  total: string 
}

export interface OrderTypeModel extends Model<OrderDocument> {}

const OrderSchema = new mongoose.Schema({
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
  },
  quantity:{
    type: Number,
    required: true
  },
  total:{
    type: String,
    required: true
  }  
}, {collection: 'order'})

export default mongoose.model(
  'order',
  OrderSchema
)
