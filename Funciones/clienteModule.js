const obtenerBaseDatos = require('./baseDatos')

const CLIENTES_DB = obtenerBaseDatos('clientes')


function buscarCliente( usuario ) {
    let clienteBuscado = this.clientes.filter( cliente => cliente.usuario === usuario )
    if (clienteBuscado.length === 0) return null
    return clienteBuscado[0]
}

function crearCliente( cliente ) {
    if (!this.barrioCubierto(cliente.barrio)) return false
    if (!!this.buscarCliente(cliente.usuario)) return false

    this.clientes.push(cliente)
    return true
}

module.exports = {
    CLIENTES_DB,
    buscarCliente,
    crearCliente
}