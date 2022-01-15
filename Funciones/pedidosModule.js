function buscarPedido (idBuscado){
    let pedidoBuscado = this.pedidos.filter(pedido => pedido.id === idBuscado)
    if (pedidoBuscado.length === 0) return null
    return pedidoBuscado
 }

 function crearPedido (pedidoNuevo){
    if (!this.barrioCubierto(pedidoNuevo.barrio)) return false /*Si el barrio NO existe NO hay nuevo pedido */
    if (!this.buscarCliente(pedidoNuevo.usuario)) return false /*Si el cliente NO existe NO hay nuevo pedido */
    if (!!this.buscarPedido(pedidoNuevo.id)) return false      /*Si el pedido SI existe NO hay nuevo pedido */
                                                               /*Entiendo que no es necesario "!!" */
   this.pedidos.push(pedidoNuevo)
   return true

}
 function buscarPedidoPorCliente (usuarioBuscado){
    return this.pedidos.filter(pedido => pedido.usuario === usuarioBuscado)
    
 }

 module.exports = {buscarPedido, crearPedido, buscarPedidoPorCliente}