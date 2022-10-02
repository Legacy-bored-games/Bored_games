import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'

//!Xenia: to save images
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './client/public/uploads/')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

export const upload = multer({ storage: storage })

import bodyParser from 'body-parser'
import userRoutes from './routes/user.js'
import eventRoutes from './routes/event.js'
import boardGameRoutes from './routes/boardGame.js'

const app = express()
dotenv.config()
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', userRoutes)
app.use('/event', eventRoutes)
app.use('/boardgame', boardGameRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MD_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`))

// //* Test first connection
app.use('/test', (req, res) => {
  res.send('----RUNING Server-----')
  console.log(req)
})
