const productService = require('./productService')

module.exports = {
    create,
    findAll,
    update,
    destroy,
    findOneProduct
}

async function create(req, res) {
    const { price = '', title = '', reviewScore = '', brand = '', image = ''} = req.body

    if (price == '' || title == ''|| reviewScore == ''|| brand == '' || image == '') {
        res.status(400).json({ error: 'Caracteristicas são invalidas' })
        return
    }

    const response = await productService.create(price, title, reviewScore, brand, image)
    if (response.error) {
        res.status(400).json({ error: response.error })
        return
    }
    res.status(201).json(response)
}

async function findAll(req, res){
    const product = await productService.findAll()
    res.status(200).json(product)
}

async function update(req, res){
    const { id } = req.params
    const { price = '', title = '', reviewScore = '', brand = '', image = ''} = req.body
    if (price == '' || title == '' || reviewScore == '' || brand == '' || image =='') {
        res.status(400).json({ error: 'Por favor, preencha todos os dados' })
        return
    }
    const response = await productService.update(price, title, reviewScore, brand, image, id)
    res.status(201).json(response)
}

async function destroy(req, res){
    const { id } =  req.params
    const response = await productService.destroy(id)
    res.status(201).json(response)
}

async function findOneProduct(req, res){{
    const { id } =  req.params
    const response = await productService.findProductById(id)
    res.status(201).json(response)
}

}