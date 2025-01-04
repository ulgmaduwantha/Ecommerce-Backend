import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },

    productName : {
        type : String,
        required : true
    },

    alternativeNames : [
        {
        type : String
        }
    ],

    images : [
        {
            type : String
        }
    ],

    price : {
        type : Number,
        required : true
    },

    lastPrice : {
        type : Number,
        required : true,

    },

    description : {
        type : String,
        required : true
    }

})

const Product = mongoose.model("Models", productSchema)

export default Product;
