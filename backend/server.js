import express from "express";
import api from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()
mongoose.connect(process.env.MONGODB_PATH, () => {
    console.log('connect');
}, (e) => console.log(e))

const PORT = process.env.SERVER_PORT || 9000
const origin = process.env.CORS_ORIGIN || 'http://localhost:3000'

const app = express()

// app.use(
//     cors({
//       //CORS (Cross origin resource sharing): You can allow requests from other domains to access the resources on your server by using the cors() express middleware function. 
//       origin: ["http://localhost:9000", "http://localhost:3000"],
//       methods: ["GET", "POST", "PUT", "DELETE"],
//       credentials: true,
//     })
//   );

app.use(cors({
    origin
}));
app.use(express.json())
app.use(express.urlencoded())

app.use(api)
//app.use('/', AuthRoute);


app.listen(PORT, () => {
    console.log(`Your app is running in http://localhost:${PORT}`)
})

