import express from "express";

const productRouter = express.Router();

productRouter.get("/",(req,res)=>{

    //console.log("This is a get request for products router")

    res.json({

        "messege" : "This is the response for product router get request"
    })
})

productRouter.post("/",(req,res)=>{

    //console.log("This is a post request for product router")

    res.json({
        "messege" : "This is a response for product router post request"
    })
})


export default productRouter;