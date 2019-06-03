var FabricaDeEmpleados = require('../Entidades/Empleado/Fabricas/FabricaDeEmpleados').FabricaDeEmpleados;
var GeneradorDeBoletas = require('../Entidades/Boleta/GeneradoresDeBoletas/GeneradorDeBoletas').GeneradorDeBoletas;

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

    crearEmpleados(listaDeEmpleados) {
        let creadorDeEmpleados = new FabricaDeEmpleados();
        let empleados = [];
        let empleado;
        listaDeEmpleados.forEach(datosEmpleado => {
            console.log(datosEmpleado);
            empleado = creadorDeEmpleados.crearEmpleado(datosEmpleado);
            empleados.push(empleado);
        });
        return empleados;
    }

    guardarBoletas(boletas) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.repositorioBoletas.insertarVariasBoletas(boletas)
                .then(respuesta => {
                    resolve(respuesta);
                }).catch(err => {
                    console.log(err)
                });
        });
    }

    async generarBoletas() {
        let listaDeEmpleados = await this.recuperarEmpleados();
        let empleados = this.crearEmpleados(listaDeEmpleados);
        let generadorDeBoletas = new GeneradorDeBoletas();
        let boletas = generadorDeBoletas.generarVariasBoletas(empleados, new Date('5, 31, 2019'));
        return await this.guardarBoletas(boletas);
    }
}

module.exports = { InteractorGenerarBoletas };