class ActualizarEmpleadoRespuesta {
    constructor(respuesta){
        this.respuesta = respuesta;
    }

    darFormato(){
        return { "Respuesta" : this.respuesta };
    }
}

module.exports = { ActualizarEmpleadoRespuesta };