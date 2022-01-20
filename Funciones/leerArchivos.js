/* COMO ALTERNATIVA N°1 EN UN ARCHIVO.JS NUEVO HACER FUNCION LECTURA AUTOMÁTICA DE ARCHIVOS DENTRO DE UNA CARPETA: */

let fs = require("fs")

const testFolder = './BaseDatos/'; 

const leerJSON = (path) => {
    
    fJSON = fs.readFileSync(path, 'utf-8');
    return JSON.parse(fJSON);
} 

const archivos = fs.readdirSync(testFolder)

 
const DATABASE = {}

archivos.forEach( archivo => {
    const URL_ARCHIVO =  testFolder + archivo
    const DATA = leerJSON(URL_ARCHIVO)
    const NOMBRE_ENTIDAD = archivo.split(".")[0]  //   [ 'barrios' , 'json' ]
    DATABASE[NOMBRE_ENTIDAD] = DATA
} )
  

 
module.exports = {DATABASE}

/* COMO ALTERNATIVA N°2 EN EL ARCHIVO APP.JS PONER LAS SIGUIENTES 3 LINEAS: */

/*
BD_Barrios = JSON.parse(fs.readFileSync("./BaseDatos/barrios.json","utf-8"));
BD_Clientes = JSON.parse(fs.readFileSync("./BaseDatos/clientes.json","utf-8"));
BD_Pedidos = JSON.parse(fs.readFileSync("./BaseDatos/pedidos.json","utf-8"));   */