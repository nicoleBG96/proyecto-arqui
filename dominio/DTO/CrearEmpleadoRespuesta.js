class CrearEmpleadoRespuesta {
    constructor(respuesta){
        this.respuesta = respuesta;
    }

    darFormato(){
        return { "Respuesta" : this.respuesta };
    }
}

module.exports = { CrearEmpleadoRespuesta };