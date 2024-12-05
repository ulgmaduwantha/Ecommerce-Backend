import Customer from "../Models/Customer.js";

export function getCustomers(req,res){

    Customer.find().then(
        (studentList)=>{
            res.json({
                lsit : studentList
            });
        }
    )
}

export function createCustomers(req,res){

    const customer = new Customer(req.body)
    customer.save().then(()=>{
        res.json({
            "messege" : "customer saved successfully"
        })
    }).catch(()=>{
        res.json({
            "messege" : "customer not saved"
        })
    })
}

export function deleteCustomer(req,res){

    Customer.deleteOne({name : req.body.name}).then(
        ()=>{
            res.json({
                "messege" : "customer deleted successfully"
            })
        }
    )
}