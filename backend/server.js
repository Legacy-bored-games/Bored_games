import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

 
 

app.use("/auth", authRoutes);
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.MD_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

 


// //* Test first connection
app.use('/test', (req, res) => {
    res.send("----RUNING Server-----")
    console.log(req);
}); 