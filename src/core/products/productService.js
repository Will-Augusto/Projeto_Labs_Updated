const req = require('express/lib/request')
const res = require('express/lib/response')
const product = require('../../../models/products')
const productRepository = require('./productRepository')
module.exports = {
    create,
    findAll,
    update,
    destroy,
    findProductById
    
}

async function create(price, title, reviewScore, brand, image) {
    const productExists = await productRepository.findByimage(image)

     if (productExists) {
         return {
             error: 'produto já existe'
         }
     }
     const product = await productRepository.create(price, title, reviewScore, brand, image)
     console.log(product)
     return product
 }

 async function findAll(){
    const product = await productRepository.findAll()
    return product
 }

 async function update(price, title, reviewScore, brand, image, id) {
    const ProductsExists = await productRepository.findById(id)
    if (!ProductsExists){
        return {
            error: 'Produto não encontrado'
        }
    }
    const update = await ProductsExists.set({
        price: price,
        title: title,
        reviewScore: reviewScore,
        brand: brand,
        image: image
    })
    const updatedProducts = await update.save()
    return updatedProducts
}

async function destroy(id){
    const ProductsExists = await productRepository.findById(id)
    if (!ProductsExists){
        return {
            error: 'Produto não encontrado'
        }
    }
    await ProductsExists.destroy()
    return "Produto deletado"
}

async function findProductById(id){
    const product = await productRepository.findById(id)
    if (!product){
        return {
            error: 'Produto não encontrado'
        }
    }
    return product
}