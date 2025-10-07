import { Router } from "express";
import { getProduct, getProducts } from "../controller/productController";




const productRoutes = Router()

productRoutes.get('/',getProducts)
productRoutes.get('/:id',getProduct)

export default productRoutes