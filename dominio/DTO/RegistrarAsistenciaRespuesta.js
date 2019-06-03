class RegistrarAsistenciaRespuesta {
    constructor(respuesta){
        this.respuesta = respuesta;
    }

    darFormato(){
        return { "Respuesta" : this.respuesta };
    }
}

module.exports = { RegistrarAsistenciaRespuesta };