const fs = require('fs')

function obtenerBaseDatos(basedatos) {
    const DATOS_STRING = fs.readFileSync(`./BaseDatos/${basedatos}.json`, 'utf-8')
    return JSON.parse(DATOS_STRING)
}

module.exports = obtenerBaseDatos