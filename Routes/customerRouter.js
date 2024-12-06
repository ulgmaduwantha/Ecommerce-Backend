import express from "express";
import { getCustomers, createCustomers, deleteCustomer } from "../Controllers/customerController.js";

const customerRouter = express.Router();

customerRouter.get("/",getCustomers)


customerRouter.post("/",createCustomers)

customerRouter.delete("/",deleteCustomer)

export default customerRouter;