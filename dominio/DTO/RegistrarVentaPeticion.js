class RegistrarVentaPeticion {
    constructor(peticion){
        this.peticion = peticion;
    }

    darFormato(){
        return this.peticion.body;
    }
}

module.exports = { RegistrarVentaPeticion };