

function barrioCubierto( barrioBuscado ) {
    return !!this.barrios.find( barrio => barrio === barrioBuscado )
}

function agregarBarrio( barrioNuevo ) {
    if (this.barrioCubierto(barrioNuevo)) return false
    this.barrios.push(barrioNuevo) 
    return true
}

module.exports = {
    barrioCubierto,
    agregarBarrio
}