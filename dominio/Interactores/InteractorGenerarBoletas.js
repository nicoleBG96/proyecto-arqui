var FabricaDeEmpleados = require('../Entidades/Empleado/Fabricas/FabricaDeEmpleados').FabricaDeEmpleados;
var GeneradorDeBoletas = require('../Entidades/Boleta/GeneradoresDeBoletas/GeneradorDeBoletas').GeneradorDeBoletas;

class InteractorGenerarBoletas {
    constructor(repositorioEmpleados, repositorioBoletas, repositorioAsistencias, repositorioVentas) {
        this.repositorioEmpleados = repositorioEmpleados;
        this.repositorioBoletas = repositorioBoletas;
        this.repositorioAsistencias = repositorioAsistencias;
        this.repositorioVentas = repositorioVentas;
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

    recuperarListaDeAsistencias() {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.repositorioAsistencias.recuperarListaDeAsistencias()
                .then(respuesta => {
                    resolve(respuesta);
                }).catch(err => {
                    console.log(err)
                });
        })
    }

    recuperarListaDeVentas() {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.repositorioVentas.recuperarListaDeVentas()
                .then(respuesta => {
                    resolve(respuesta);
                }).catch(err => {
                    console.log(err)
                });
        })
    }

    crearEmpleados(listaDeEmpleados, listaDeAsistencias, listaDeVentas, fechaActual) {
        let fabricaDeEmpleados = new FabricaDeEmpleados(listaDeEmpleados, listaDeAsistencias, listaDeVentas, fechaActual);
        return fabricaDeEmpleados.crearVariosEmpleados();
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

    async generarBoletas(fechaActual) {
        let listaDeEmpleados = await this.recuperarEmpleados();
        let listaDeAsistencias = await this.recuperarListaDeAsistencias();
        let listaDeVentas = await this.recuperarListaDeVentas();
        let empleados = this.crearEmpleados(listaDeEmpleados, listaDeAsistencias, listaDeVentas, fechaActual);
        let generadorDeBoletas = new GeneradorDeBoletas();
        let boletas = generadorDeBoletas.generarVariasBoletas(empleados, new Date(fechaActual));
        return await this.guardarBoletas(boletas);
    }
}

module.exports = { InteractorGenerarBoletas };