class InteractorCrearEmpleado {
    constructor(repositorioEmpleados) {
        this.repositorioEmpleados = repositorioEmpleados;
    }

    crearNuevoEmpleado(empleado) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.repositorioEmpleados.insertarEmpleado(empleado)
                .then(respuesta => {
                    resolve(respuesta);
                }).catch(err => {
                    console.log(err)
                });
        })
    }
}

module.exports = { InteractorCrearEmpleado };