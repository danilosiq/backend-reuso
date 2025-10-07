import { Request, Response } from "express";
import { ProductType } from "../models/Product";

const products: ProductType[] = [
  { id: 1, name: 'Laranja', price: 30 },
  { id: 2, name: 'Maçã', price: 25 },
  { id: 3, name: 'Banana', price: 20 },
  { id: 4, name: 'Uva', price: 35 },
  { id: 5, name: 'Pera', price: 28 },
  { id: 6, name: 'Manga', price: 40 },
  { id: 7, name: 'Abacaxi', price: 50 },
  { id: 8, name: 'Kiwi', price: 32 },
  { id: 9, name: 'Morango', price: 45 },
  { id: 10, name: 'Melancia', price: 60 },
  { id: 11, name: 'Caju', price: 22 },
  { id: 12, name: 'Ameixa', price: 27 },
  { id: 13, name: 'Mamão', price: 33 },
  { id: 14, name: 'Limão', price: 18 },
  { id: 15, name: 'Coco', price: 38 },
  { id: 16, name: 'Framboesa', price: 55 },
  { id: 17, name: 'Amora', price: 48 },
  { id: 18, name: 'Tangerina', price: 26 },
  { id: 19, name: 'Maracujá', price: 30 },
  { id: 20, name: 'Goiaba', price: 34 },
  { id: 21, name: 'Pêssego', price: 29 },
  { id: 22, name: 'Pitanga', price: 23 },
  { id: 23, name: 'Graviola', price: 52 },
  { id: 24, name: 'Cranberry', price: 60 },
  { id: 25, name: 'Açaí', price: 47 },
  { id: 26, name: 'Lichia', price: 41 },
  { id: 27, name: 'Nectarina', price: 36 },
  { id: 28, name: 'Figo', price: 44 },
  { id: 29, name: 'Carambola', price: 39 },
  { id: 30, name: 'Jabuticaba', price: 50 }
];



export const getProducts = (req:Request, res:Response)=>{
    res.json(products)
}

export const getProduct = (req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const product = products.find(p=> p.id===id)

    if(!product){
      res.status(404).json("Produto nao encontrado")
    }
    res.json(product)
}