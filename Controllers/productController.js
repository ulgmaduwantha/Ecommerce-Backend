import Product from "../Models/Product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req,res){

    if(!isAdmin(req)){
        res.json({
            message: "You are not authorized to perform this action"
        })

        return
    }

    const newProductData = req.body

    const product = new Product(newProductData)

    product.save().then(()=>{
        res.json({
            messege : "product created"
        })
    }).catch((error)=>{
        res.json({
            messege : error
        })
    })

}

export function getProducts(req,res){
    Product.find({}).then((products)=>{
        res.json(products)
    })
}