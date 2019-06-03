class InteractorRegistrarAsistencia {
    constructor(respositorioAsistencias) {
        this.respositorioAsistencias = respositorioAsistencias;
    }

    registrarAsistencia(asistencia) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.respositorioAsistencias.registrarAsistenciaDiaria(asistencia)
                .then(respuesta => {
                    resolve(respuesta);
                }).catch(err => {
                    console.log(err)
                });
        })
    }
}

module.exports = { InteractorRegistrarAsistencia };