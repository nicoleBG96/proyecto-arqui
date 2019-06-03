class ActualizarEmpleadoPeticion {
    constructor(peticion){
        this.peticion = peticion;
    }

    darFormato(){
        return this.peticion.body;
    }
}

module.exports = { ActualizarEmpleadoPeticion };