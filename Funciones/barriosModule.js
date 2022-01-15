

function barrioCubierto (barrioBuscado){
    return !!this.barrios.find(barrios => barrios === barrioBuscado) /*El "!!" convierte el valor encontrado "true" y undifined en "false" */

 }

 function agregarBarrio (barrioNuevo){
     if (this.barrioCubierto(barrioNuevo)) return false
     this.barrios.push(barrioNuevo)
     return true 
     
 }

 module.exports = {barrioCubierto, agregarBarrio}