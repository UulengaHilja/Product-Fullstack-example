// connect database
import mongoose from 'mongoose'
import app from './app'
import dotenv from "dotenv"

dotenv.config()
const port = 8000

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    // Start Express server
    app.listen(port, () => {
      console.log('App is running at ' + port)      
    })
  })
  .catch((err: Error) => {
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running. ' + err
    )
    process.exit(1)
  })

    

