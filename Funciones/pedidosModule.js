function buscarPedido (idBuscado){
    let pedidoBuscado = this.pedidos.filter(pedido => pedido.id === idBuscado) /*Considero mejor usar "find" (busqueda de un único valor), ya que si el dia mañana piden actualizar domicilio de un pedido, se debe realizar sobre el array principal y no en el nuevo array filter */
    if (pedidoBuscado.length === 0) return null
    return pedidoBuscado
 }

 function crearPedido (pedidoNuevo){
    if (!this.barrioCubierto(pedidoNuevo.barrio)) return false /*Si el barrio NO existe NO hay nuevo pedido */
    if (!this.buscarCliente(pedidoNuevo.usuario)) return false /*Si el cliente NO existe, NO se crea un nuevo pedido */
    if (!!this.buscarPedido(pedidoNuevo.id)) return false      /*Si el pedido SI existe, NO se crea un nuevo pedido */
                                                               /*Entiendo que no es necesario "!!" */
   this.pedidos.push(pedidoNuevo)
   return true

}
 function buscarPedidoPorCliente (usuarioBuscado){
    return this.pedidos.filter(pedido => pedido.usuario === usuarioBuscado)
    
 }

 module.exports = {buscarPedido, crearPedido, buscarPedidoPorCliente}