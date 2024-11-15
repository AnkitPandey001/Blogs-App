
import express from "express"
import routes from './routes/routes.js';
import userRouter from "./routes/userRoutes.js";
import { dbConnect } from "./db/db.js";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import Postroutes from "./routes/postRoutes.js";
import cors from 'cors'
dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true                 
}));
//! databse;
dbConnect();
//! Routes 
app.use(cookieParser());
app.use('/api/auth',routes)
app.use('/api/user',userRouter)
app.use('/api/post',Postroutes)

//! listeing to server

app.use('/',(req,res)=>{
    res.json({
        message:"Hello"
    })
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})