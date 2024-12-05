import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Customer from './Models/Customer.js';
import customerRouter from './Routes/customerRouter.js';
import productRouter from './Routes/productRouter.js';

const app = express();

const mongoUrl = "mongodb+srv://admin:Ccs151075@cluster0.pcjhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("Database Connected");
})

app.use(bodyParser.json())

app.use("/api/customers", customerRouter)
app.use("/api/products", productRouter)

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

