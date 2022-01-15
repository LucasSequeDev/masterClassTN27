

  function buscarCliente (usuarioBuscado){
    let clienteBuscado = this.clientes.filter(cliente => cliente.usuario === usuarioBuscado) /*No se puede "!!"  a un filter*/
    if (clienteBuscado.length === 0) return null
    return clienteBuscado
}

 function crearCliente (clienteNuevo){
    if (!!this.buscarCliente(clienteNuevo.usuario)) return false /*Entiendo que no es necesario "!!" */
    this.clientes.push(clienteNuevo)                             /*Si el cliente SI existe NO hay nuevo cliente */
    return true   
 }

 module.exports = {buscarCliente, crearCliente}