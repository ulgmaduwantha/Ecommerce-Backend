import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Customer from './Models/Customer.js';
import customerRouter from './Routes/customerRouter.js';
import userRouter from './Routes/userRouter.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import productRouter from './Routes/productRouter.js';
import orderRouter from './Routes/orderRouter.js';
import cors from 'cors'
dotenv.config()

const app = express();

const mongoUrl = process.env.MONGO_DB_URI

app.use(cors())

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("Database Connected");
})

app.use(bodyParser.json())

app.use(
    (req,res,next)=>{
        const token = req.header("Authorization")?.replace("Bearer ","")
        console.log(token) 

        if(token != null){
            jwt.verify(token, process.env.SECRET_KEY , (error,decoded)=>{

                if(!error){
                
                    req.user = decoded
                }
            })
        }

        next()
    }
)

app.use("/api/customers", customerRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/orders", orderRouter)

app.get("/",

    (req,res)=>{
        console.log(req.body)
        console.log("Hello world !")
        res.json(
            {
                "message": "Hi There !",
            }
        )
    }

);


app.post("/",


    (req,res)=>{

        const newCustomer = new Customer(req.body)

        // newCustomer.save().then(
        //     ()=>{
        //         res.json({
        //             messege : "Student Created"
        //         })
        //     }
        // ).catch(()=>{
        //     res.json({
        //         "messege" : "Error Occurd"
        //     })
        // })
        
    }
);

 app.listen(
    3000,
    ()=>{

        console.log("Server is running on port number 3000")
    }

 )

