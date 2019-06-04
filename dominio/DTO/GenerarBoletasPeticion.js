class GenerarBoletasPeticion {
    constructor(peticion){
        this.peticion = peticion;
    }

    darFormato(){
        this.peticion.body = { "FechaActual" : "5, 31, 2019" };
        return this.peticion.body.FechaActual;
    }
}

module.exports = { GenerarBoletasPeticion };