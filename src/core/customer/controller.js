const service = require('./service')

module.exports = {
    create,
    findAll,
    update,
    destroy,
    authenticate
}

async function create(req, res) {
    const { name = '', email = '' } = req.body

    if (name == '' || email == '') {
        res.status(400).json({ error: 'E-mail ou name são invalidos' })
        return
    }

    const response = await service.create(name, email)
    if (response.error) {
        res.status(400).json({ error: response.error })
        return
    }

    res.status(201).json(response)
}

async function findAll(req, res) {
    const response = await service.findAll()
    res.status(200).json(response)
}

async function update(req, res) {
    const { id } =  req.params
    const { name = '', email = ''} = req.body
    
    if (name == '' || email == ''){
        res.status(400).json({ error: 'Por favor, preencha todos os dados' })
        return
    }

    const response = await service.update(name, email, id)
    res.status(201).json(response)
}

async function destroy(req, res){
    const { id } =  req.params
    const response = await service.destroy(id)
    res.status(201).json(response)
}

async function authenticate(req, res){
    const { email = '' } = req.body

    if (email == '') {
        res.status(400).json({ error: 'E-mail invalido' })
        return
    }

    const response = await service.authenticate(email)
    if (response.error) {
        res.status(400).json({ error: response.error })
        return
    }

    res.status(200).json(response)
}