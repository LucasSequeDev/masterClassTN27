const fs = require("fs");
BD_Barrios = JSON.parse(fs.readFileSync("./BaseDatos/barrios.json","utf-8"));
BD_Clientes = JSON.parse(fs.readFileSync("./BaseDatos/clientes.json","utf-8"));
BD_Pedidos = JSON.parse(fs.readFileSync("./BaseDatos/pedidos.json","utf-8"));   

let {barrioCubierto,agregarBarrio} = require("./Funciones/barriosModule")
let {buscarCliente,crearCliente} = require("./Funciones/clientesModule")
let {buscarPedido, crearPedido, buscarPedidoPorCliente} = require("./Funciones/pedidosModule")

const miApp = {
    barrios: BD_Barrios,
    clientes: BD_Clientes,
    pedidos: BD_Pedidos,
    barrioCubierto: barrioCubierto,
    agregarBarrio: agregarBarrio,
    buscarCliente: buscarCliente,
    crearCliente: crearCliente,
    buscarPedido: buscarPedido,
    crearPedido: crearPedido,
    buscarPedidoPorCliente: buscarPedidoPorCliente
}

console.log("-----LISTADO BARRIOS CUBIERTOS -------");

console.log(miApp.barrioCubierto("Palermo"));

console.log("-----SE AGREGA UN BARRIO A LA LISTA DE CUBIERTOS -------");

miApp.agregarBarrio("Cerro de las Rosas");

console.log("-----LISTADO BARRIOS CUBIERTOS ACTUALIZADO-------");

console.log(miApp.barrios);

console.log("-----SE BUSCA SI EXISTE UN CLIENTE POR USUARIO BUSCADO -------");

console.log(miApp.buscarCliente("Boris"));

console.log("-----SE CREA UN CLIENTE NUEVO -------");

 miApp.crearCliente({
    "usuario": "Grego",
    "mail": "gromero@mail.com",
    "barrio": "Cerro de las Rosas"
});

console.log("-----LISTADO CLIENTES ACTUALIZADOS -------");


console.log(miApp.clientes);

console.log("-----SE BUSCA SI EXISTE UN PEDIDO POR NUMERO ID-------");

console.log(miApp.buscarPedido("164211916783"));

console.log("-----SE CREA DOS NUEVO PEDIDO-------");

console.log(miApp.crearPedido({
    "id": "11111111111",
"usuario": "Grego",
"barrio": "Cerro de las Rosas",
"costo": 10000}));
console.log(miApp.crearPedido({
    "id": "22222222222",
"usuario": "Grego",
"barrio": "Cerro de las Rosas",
"costo": 20000}));

console.log("-----LISTADO PEDIDOS ACTUALIZADOS -------");

console.log(miApp.pedidos);

console.log("-----LISTADO PEDIDOS POR CLIENTE GENERADO -------");

console.log(miApp.buscarPedidoPorCliente("Grego"));

module.exports = miApp