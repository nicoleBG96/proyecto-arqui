class CrearEmpleadoPeticion {
    constructor(peticion){
        this.peticion = peticion;
    }

    darFormato(){
        return this.peticion.body;
    }
}

module.exports = { CrearEmpleadoPeticion };