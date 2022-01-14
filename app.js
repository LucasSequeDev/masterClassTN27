// Aqui comienza todo!
const { BARRIOS_DB, barrioCubierto, agregarBarrio } = require('./Funciones/barrioModule')
const { CLIENTES_DB, buscarCliente, crearCliente } = require('./Funciones/clienteModule')
const { PEDIDOS_DB, buscarPedido, crearPedido, buscarPedidoCliente } = require('./Funciones/pedidoModule')


const miApp = {
    barrios: BARRIOS_DB,
    clientes: CLIENTES_DB,
    pedidos: PEDIDOS_DB,
    barrioCubierto: barrioCubierto,
    agregarBarrio: agregarBarrio,
    buscarCliente: buscarCliente,
    crearCliente: crearCliente,
    buscarPedido: buscarPedido,
    crearPedido: crearPedido,
    buscarPedidoCliente: buscarPedidoCliente
}



module.exports = miApp