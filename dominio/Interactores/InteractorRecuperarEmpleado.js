class InteractorRecuperarEmpleado {
    constructor(repositorioEmpleados) {
        this.repositorioEmpleados = repositorioEmpleados;
    }

    recuperarEmpleados() {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.repositorioEmpleados.recuperarTodosLosEmpleado()
                .then(respuesta => {
                    resolve(respuesta);
                }).catch(err => {
                    console.log(err)
                });
        })
    }
}

module.exports = { InteractorRecuperarEmpleado };