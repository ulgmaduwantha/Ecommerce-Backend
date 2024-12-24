import express from "express";
import { getProducts, createProducts, deleteProduct, getProductByName } from "../Controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.post("/", createProducts);

productRouter.delete("/:name", deleteProduct);

productRouter.get("/:name", getProductByName);


export default productRouter;