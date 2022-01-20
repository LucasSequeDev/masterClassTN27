

  function buscarCliente (usuarioBuscado){
    let clienteBuscado = this.clientes.filter(cliente => cliente.usuario === usuarioBuscado) /*No se puede "!!"  a un filter*/
    if (clienteBuscado.length === 0) return null                                             /*Considero mejor usar "find" (busqueda de un único valor), ya que si el dia mañana piden actualizar corre (email) de un cliente, se debe realizar sobre el array principal y no en el nuevo array filter */
    return clienteBuscado
}

 function crearCliente (clienteNuevo){
    if (!!this.buscarCliente(clienteNuevo.usuario)) return false /*Entiendo que no es necesario "!!" */
    this.clientes.push(clienteNuevo)                             /*Si el cliente SI existe, NO se crea un nuevo cliente */
    return true   
 }

 module.exports = {buscarCliente, crearCliente}