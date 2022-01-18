const express = require('express')
const customerController = require('./core/customer/controller')
const productController = require('./core/products/productController')
const auth = require('./middlewares/auth')
const routes = express.Router()

routes.post('/customer', customerController.create)
routes.get('/customer',  auth.authorize, customerController.findAll)
routes.put('/customer/:id',  auth.authorize, customerController.update)
routes.delete('/customer/:id', auth.authorize, customerController.destroy)


routes.post('/products', productController.create)
routes.get('/products', auth.authorize, productController.findAll)
routes.put('/products/:id', auth.authorize, productController.update)
routes.delete('/products/:id', auth.authorize, productController.destroy)
routes.get('/products/:id', auth.authorize, productController.findOneProduct)

routes.post('/authenticate', auth.authorize, customerController.authenticate)

// routes.post('/productsFavorites', favoriteController.create)
// routes.get('/productsFavorites', favoriteController.findAll)
// routes.delete('/productsFavorites/:id', favoriteController.destroy)

module.exports = routes

