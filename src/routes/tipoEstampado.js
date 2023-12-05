const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getTipoEstampado, postTipoEstampado, putTipoEstampado, deleteTipoEstampado } = require('../controllers/tipoEstampado')

route.get('/', getTipoEstampado)

route.post('/', postTipoEstampado)

route.put('/', putTipoEstampado)

route.delete('/', deleteTipoEstampado)
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