import { Request, Response } from "express"
import Product from "../models/Product.model"

export const getProducts = async(req: Request, res: Response) => {
    try {
        const products = await Product.findAll()
        res.json({data: products})
    } catch (error) {
        console.log(error)
    }
}

export const getProductsById = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)
        if(!product){
            res.status(404).json({
                error: 'Producto NO Encontrado'
            })
            return
        }
        res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async(req : Request, res: Response) => {
    //console.log(req.body)
    try {
        const product = await Product.create(req.body)
        res.json({data: product})
    } catch (error) {
        console.log(error)
    }    
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)
        if(!product){
            res.status(404).json({
                error: 'Producto NO Encontrado'
            })
            return
        }
        //Actualizar [Objeto completo]
        await product.update(req.body)
        await product.save()
        res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}

export const updateAvailability = async (req: Request, res: Response) => {
   
        const { id } = req.params
        const product = await Product.findByPk(id)
        if(!product){
            res.status(404).json({
                error: 'Producto NO Encontrado'
            })
            return
        }
        //Actualizar [parcialmente, solo lo que el desarrollador decide]
        product.availability = !product.dataValues.availability
        //product.name = req.body.name
        await product.save()
        res.json({data: product})
    
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if(!product) {
        res.status(404).json({
            error: 'Producto No Encontrado'
        })
        return
    }
    
    await product.destroy()
    res.json({data: 'Producto Eliminado'})
}

