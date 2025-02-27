const _ = require('lodash') 

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const erros = []
    _.forIn(nodeRestfulErrors, error => erros.push(error.message))
    return erros
}