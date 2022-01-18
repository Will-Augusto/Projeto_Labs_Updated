const Products = require('../../../models/products')
const Model = require('../../../models')
const repository = Products(Model.sequelize, Model.Sequelize.DataTypes)

module.exports = {
    findByimage,
    create,
    findAll,
    findById
}

async function findByimage(image) {
    const product = await repository.findOne({ where: { image } })
    return product
}

async function create(price, title, reviewScore, brand, image) {
    const product = await repository.create({ price, title, reviewScore, brand, image})
    return product
}

async function findAll(){
    const product = await repository.findAll()
    return product
}

async function findById(id){
    const customer = await repository.findOne({ where: { id } })
    return customer
}
