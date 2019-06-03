class RegistrarAsistenciaPeticion {
    constructor(peticion){
        this.peticion = peticion;
    }

    darFormato(){
        return this.peticion.body;
    }
}

module.exports = { RegistrarAsistenciaPeticion };