import mongoose from "mongoose";

 const customerSchema = mongoose.Schema({
    "name" : String,
    "age" : Number,
    "address" : String

})

const Customer = mongoose.model("customers", customerSchema)     // This code line shows the connection between our code and the database collection

export default Customer;