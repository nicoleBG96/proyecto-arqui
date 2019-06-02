import { FabricaDeEmpleados } from '../Entidades/Empleado/FabricaDeEmpleados';

class InteractorGenerarBoletas {
    constructor(repositorioEmpleados, repositorioBoletas) {
        this.repositorioEmpleados = repositorioEmpleados;
        this.repositorioBoletas = repositorioBoletas;
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

    crearEmpleados(listaDeEmpleados){
        let creadorDeEmpleados = new FabricaDeEmpleados();
        let empleados = [];
        let empleado;
        listaDeEmpleados.forEach(datosEmpleado => {
            empleado = creadorDeEmpleados.crearEmpleado(datosEmpleado);
            empleados.push(empleado);
        });
        return empleados;
    }

    async generarBoletas() {
        let listaDeEmpleados = await this.recuperarEmpleados();
        let empleados = crearEmpleados(listaDeEmpleados);
        return empleados;
    }
}

module.exports = { InteractorGenerarBoletas };