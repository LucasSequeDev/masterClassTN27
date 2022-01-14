

function buscarCliente( usuario ) {
    let clienteBuscado = this.clientes.filter( cliente => cliente.usuario === usuario )
    if ( clienteBuscado.length === 0 ) return null
    return clienteBuscado[0]
}

function crearCliente( cliente ) {
    if (!!this.buscarCliente(cliente.usuario)) return false
    this.clientes.push(cliente)
    return true
}

module.exports = {
    buscarCliente,
    crearCliente
}