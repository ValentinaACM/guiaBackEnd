const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getProducto, postProducto, putProducto, deleteProducto } = require('../controllers/producto')

route.get('/', getProducto)

route.post('/', postProducto)

route.put('/', putProducto)

route.delete('/', deleteProducto)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 