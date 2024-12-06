import express from "express";
import { getProducts, createProducts, deleteProduct } from "../Controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.post("/", createProducts);

productRouter.delete("/", deleteProduct);


export default productRouter;