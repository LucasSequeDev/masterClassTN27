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
    barrioCubierto: function( barrioBuscado ) {
        return !!this.barrios.find( barrio => barrio === barrioBuscado )
    },
    agregarBarrio: function( barrioNuevo ) {
        if (this.barrioCubierto(barrioNuevo)) return false

        this.barrios.push(barrioNuevo)
        return true
    },
    buscarCliente: function( usuario ) {
        let clienteBuscado = this.clientes.filter( cliente => cliente.usuario === usuario )

        if (clienteBuscado.length === 0) return null
        return clienteBuscado[0]
    },
    crearCliente: function( cliente ) {
        if (!this.barrioCubierto(cliente.barrio)) return false
        if (!!this.buscarCliente(cliente.usuario)) return false

        this.clientes.push(cliente)
        return true
    },
    buscarPedido: function( id ) {
        let pedidoBuscado = this.pedidos.filter( pedido => pedido.id === id )

        if (pedidoBuscado.length === 0) return null
        return pedidoBuscado[0]
    },
    crearPedido: function( pedido ) {
        if (!!this.buscarPedido(pedido.id)) return false
        if (!this.barrioCubierto(pedido.barrio)) return false
        if (!this.buscarCliente(pedido.usuario)) return false
        
        this.pedidos.push(pedido)
        return true
    },
    buscarPedidoCliente: function( usuario ) {
        return this.pedidos.filter( pedido => pedido.usuario === usuario )
    },
}



module.exports = miApp