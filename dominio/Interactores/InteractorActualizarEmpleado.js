class InteractorActualizarEmpleado {
    constructor(repositorioEmpleados) {
        this.repositorioEmpleados = repositorioEmpleados;
    }

    actualizarEmpleado(empleado) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.repositorioEmpleados.actualizarEmpleado(empleado)
                .then(respuesta => {
                    resolve(respuesta);
                }).catch(err => {
                    console.log(err)
                });
        })
    }
}

module.exports = { InteractorActualizarEmpleado };