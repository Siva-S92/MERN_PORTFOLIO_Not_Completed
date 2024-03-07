import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { databaseConnection } from './dbConnection/db.js';
import { portfolioRouter } from './routes/portfolioRoute.js';


// config the env variables
dotenv.config()


// server setup
const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.json())
app.use(cors())


// database connection
databaseConnection();

//Routes
app.use("/api/portfolio", portfolioRouter)

//listern the server
app.listen(port, ()=> {
    console.log('server running on the',port)
})