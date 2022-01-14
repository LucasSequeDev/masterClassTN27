// Aqui comienza todo!
const fs = require('fs')

const BARRIO_DB_STRING = fs.readFileSync('./BaseDatos/barrios.json', 'utf-8')
const BARRIOS_DB = JSON.parse(BARRIO_DB_STRING)

const CLIENTES_DB_STRING = fs.readFileSync('./BaseDatos/clientes.json', 'utf-8')
const CLIENTES_DB = JSON.parse(CLIENTES_DB_STRING)

const PEDIDOS_DB_STRING = fs.readFileSync('./BaseDatos/pedidos.json', 'utf-8')
const PEDIDOS_DB = JSON.parse(PEDIDOS_DB_STRING)

const miApp = {
    barrios: BARRIOS_DB,
    clientes: CLIENTES_DB,
    pedidos: PEDIDOS_DB,
    barrioCubierto: function( barrio ) {},
    agregarBarrio: function( barrio ) {},
    buscarCliente: function( usuario ) {},
    crearCliente: function( cliente ) {},
    buscarPedido: function( id ) {},
    crearPedido: function( pedido ) {},
    buscarPedidoCliente: function( usuario ) {},
}

module.exports = miApp