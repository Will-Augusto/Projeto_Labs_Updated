const jwt = require('jsonwebtoken')

exports.gererateToken = async (data) => {
    return jwt.sign(data, process.env.JWT_KEY, { expiresIn: '1d' })
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, process.env.JWT_KEY)
    return data
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        res.status(401).json({
            message: 'Acesso restrito'
        })
    } else {
        jwt.verify(token, process.env.JWT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                })
            } else {
                next()
            }
        })
    }
}
