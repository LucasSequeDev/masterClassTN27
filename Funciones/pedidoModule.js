

function buscarPedido( id ) {
    let pedidoBuscado = this.pedidos.filter( pedido => pedido.id === id )
    if (pedidoBuscado.length === 0) return null
    return pedidoBuscado[0]
}

function crearPedido( pedido ) {
    if (!this.barrioCubierto(pedido.barrio)) return false
    if (!this.buscarCliente(pedido.usuario)) return false
    if (!!this.buscarPedido(pedido.id)) return false

    this.pedidos.push(pedido)
    return true
}

function buscarPedidoCliente( usuario ) {
    return this.pedidos.filter( pedido => pedido.usuario === usuario )
}

module.exports = {
    buscarPedido,
    crearPedido,
    buscarPedidoCliente
}