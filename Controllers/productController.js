import Product from "../Models/Product.js";
import express from "express";


const productRouter = express.Router();

export function getProducts(req,res){
    Product.find().then(
        (productList)=>{
            res.json({
                list : productList
            });
        }
    ).catch(
        (err)=>{
            res.json({
                "messege" : "Error"
            })
        }
    )
}


export function createProducts(req,res){
    const newProduct = new Product(req.body)
    newProduct.save().then(()=>{
        res.json({
            messege : "product saved successfully"
        })
    }).catch(()=>{
        res.json({
            messege : "product not saved"
        })
    })
}



export function deleteProduct(req,res){
    Product.deleteOne({name : req.body.name}).then(
        ()=>{
            res.json({
                messege : "product deleted successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                messege : "product not delete"
            })
        }
    )
}

export default productRouter;