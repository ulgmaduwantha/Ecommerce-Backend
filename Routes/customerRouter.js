import express from "express";
import Customer from "../Models/Customer.js";
import { getCustomers, createCustomers, deleteCustomer } from "../Controllers/customerController.js";

const customerRouter = express.Router();

customerRouter.get("/",getCustomers)


customerRouter.post("/",createCustomers)

customerRouter.delete("/",deleteCustomer)

export default customerRouter;