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

    console.log(req.user)

    if(req.user == null){
        res.json({
            messege : "you are not logged in"
        })
        return
    }

    if(req.user.type !=  "admin"){
        res.json({
            messege : "you are not admin"
        })
    }

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
    Product.deleteOne({name : req.params.name}).then(
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


export function getProductByName(req, res) {
    const name = req.params.name;

    Product.find({ name : name }).then(
        (productList) => {

            if(productList.length == 0){
                res.json({
                    "messege" : "product not found"
                })

            }else{
                res.json({
                    list : productList
                })
            }
        }
    ).catch(
        () => {
            res.json({
                message: "Error" // Corrected spelling
            });
        }    
    );
}

export default productRouter;