const Customer = require('../../../models/customer')
const Model = require('../../../models')
const repository = Customer(Model.sequelize, Model.Sequelize.DataTypes);

module.exports = {
    findByEmail,
    create,
    findAll,
    findById,
    
}

async function findByEmail(email) {
    const customer = await repository.findOne({ where: { email } })
    return customer
}

async function create(name, email) {
    const customer = await repository.create({ name, email })
    return customer
}

async function findAll() {
    const customers = await repository.findAll()
    return customers
}

async function findById(id){
    const customer = await repository.findOne({ where: { id } })
    return customer
}


