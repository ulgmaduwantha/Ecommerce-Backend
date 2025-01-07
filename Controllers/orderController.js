import Order from "../Models/Order.js";
import {isCustomer} from "../Controllers/userController.js"

export async function createOrder(req,res){
    
    //take the latest oder id from database

    if(!isCustomer){
        res.json({
            messege : "please login as a customer to create orders"
        })
    }
    try{
        const latestOrder = await Order.find().sort({Date : -1}).limit(1)
        

    let orderId 

    if(latestOrder.length == 0){
        orderId = "GFC0001"
    }else{
        const currentOrderId = latestOrder[0].orderId
        console.log(currentOrderId)
        const numberString = currentOrderId.replace("GFC","")

        const number = parseInt(numberString)

        const newNumber = (number + 1).toString().padStart(4 , "0");
        orderId = "GFC" + newNumber
    }

    const newOrderData = req.body
    newOrderData.orderId = orderId
    newOrderData.email = req.user.email
    
    const order = new Order(newOrderData)
    
    await order.save()

    res.json({
        message : "order created successfully"
    })
    
    
    
    }catch(error){
        res.status(500).json({
            messege : error.messege
        })
    }


}

export async function getOrders(req,res){
    
    try{
        const orders = await Order.find({email : req.user.email})
    
        res.json(orders)
    
    }catch(error){
        res.status(500).json({
            messege : error.messege
        })
    }
    
}