const Usuario = require('../models/usuario')

const emailExiste = async (correo = '') => {

    const existeEmail = await Usuario.findOne({correo})
    if ( existeEmail ) {
        throw new Error (`El correo: ${ correo} ya esta registrado en la base de datos`)
    }
    
}

module.exports = {
    emailExiste
}