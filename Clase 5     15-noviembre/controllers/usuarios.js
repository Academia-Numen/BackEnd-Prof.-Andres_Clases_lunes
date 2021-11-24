const Usuario = require("../models/usuario");
const bcryptjs = require('bcryptjs')


const usuariosGet = async (req, res) => {

    //const usuario = await Usuario.find()

    const { limite = 5, desde = 0 } = req.query

    const paramatros = { estado: true }


    const [total, usuarios ] = await Promise.all([
        Usuario.countDocuments(paramatros),
        Usuario.find(paramatros)
        .skip(Number (desde))
        .limit(Number(limite))

    ])

    // const usuarios = await Usuario.find(paramatros)
    //         .skip(Number (desde))
    //         .limit(Number(limite))
    
    // const total = await Usuario.countDocuments(paramatros)

    res.status(200).json({

        total,
        usuarios
    })

}

const usuariosPost = async (req, res) => {

    const { nombre, correo, password, rol } = req.body
    console.log(nombre, correo, password, rol);
    

    const usuario = new Usuario( {nombre, correo, password, rol} )

    // Encriptar la contrasenia
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync( password, salt);

    //Guardar en la base de datos
    await usuario.save()

    res.status(200).json({

        usuario
      
    })

}


const usuariosPut = async(req, res) => {

    const { id } = req.params

    const { uid, google, password, ...resto } = req.body


    if ( password ) {
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync( password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)



    res.status(200).json(usuario)

}


const usuariosDelete = async(req, res) => {

    const { id } = req.params
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false })

    res.status(200).json(usuario)

}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}


