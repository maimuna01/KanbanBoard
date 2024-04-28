import express from "express";
import api from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()
mongoose.connect(process.env.MONGODB_PATH, () => {
    console.log('Connected to MongoDB');
}, (e) => console.log(e))

const PORT = process.env.SERVER_PORT || 9000
const origin = process.env.CORS_ORIGIN || 'http://localhost:3000'

const app = express()

app.use(cors({
    origin
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // Specify extended option for URL encoded data

app.use(api)

// Import routes for login and signup
import { loginRouter, signupRouter } from './routes/authRoutes.js';

// Use login and signup routes
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.listen(PORT, () => {
    console.log(`Your app is running in http://localhost:${PORT}`)
})
