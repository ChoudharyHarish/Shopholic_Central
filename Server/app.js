import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";


import {connectDb} from "./db/connection.js";

import authRouter from './routes/auth.js';
import productsRouter from './routes/products.js';



const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res) => {
    res.send('Everything working fine here !!');
})



app.get("/success",(req,res) => {
    res.send("Success");
})
app.get("/cancel",(req,res) => {
    res.send("Failure");
})
app.use('/api/v1/user', authRouter);
app.use('/api/v1/products', productsRouter);




const port = process.env.PORT ||  5000;

const start = async() => {
    try{
       await connectDb(process.env.MONGO_URL);
       app.listen(port,() => console.log("Server running successfull!!y"))
    }
    catch(error){
        console.log(error);
    }
}


start();

