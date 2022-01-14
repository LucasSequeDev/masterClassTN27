const obtenerBaseDatos = require('./baseDatos')

const PEDIDOS_DB = obtenerBaseDatos('pedidos')

function buscarPedido( id ) {
    let pedidoBuscado = this.pedidos.filter( pedido => pedido.id === id )

    if (pedidoBuscado.length === 0) return null
    return pedidoBuscado[0]
}

function crearPedido( pedido ) {
    if (!!this.buscarPedido(pedido.id)) return false
    if (!this.barrioCubierto(pedido.barrio)) return false
    if (!this.buscarCliente(pedido.usuario)) return false
    
    this.pedidos.push(pedido)
    return true
}

function buscarPedidoCliente( usuario ) {
    return this.pedidos.filter( pedido => pedido.usuario === usuario )
}

module.exports = {
    PEDIDOS_DB,
    buscarPedido,
    crearPedido,
    buscarPedidoCliente
}