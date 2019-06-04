let FabricaDeCalculadoras = require('./FabricaDeCalculadoras').FabricaDeCalculadoras;
let FabricaDeVerificadoresFechaDePago = require('./FabricaDeVerificadoresFechaDePago').FabricaDeVerificadoresFechaDePago;
let FabricaMetodosDePago = require('./FabricaMetodosDePago').FabricaMetodosDePago;
let FabricaNotificadores = require('./FabricaNotificadores').FabricaNotificadores;
let FabricaSindicatos = require('./FabricaSindicatos').FabricaSindicatos;
let Empleado = require('../Empleado').Empleado;


class FabricaDeEmpleados {
    constructor(listaDeEmpleados, listaDeAsistencias, listaDeVentas, fechaActual) {
        this.listaDeEmpleados = listaDeEmpleados;
        this.listaDeAsistencias = listaDeAsistencias;
        this.listaDeVentas = listaDeVentas;
        this.fechaActual = fechaActual;
    }

    crearEmpleado(datosEmpleado) {
        let fabricaDeCalculadoras = new FabricaDeCalculadoras(this.listaDeAsistencias, this.listaDeVentas, this.fechaActual);
        let fabricaDeVerificadoresFechaDePago = new FabricaDeVerificadoresFechaDePago();
        let fabricaDeMetodosDePago = new FabricaMetodosDePago();
        let fabricaDeNotificadores = new FabricaNotificadores();
        let fabricaSindicatos = new FabricaSindicatos();
        let empleado = new Empleado(datosEmpleado.Nombre, datosEmpleado.Codigo, datosEmpleado.Ci, datosEmpleado.Cargo,
            fabricaDeCalculadoras.crearCalculadora(datosEmpleado), fabricaDeVerificadoresFechaDePago.crearVerificadorFechaDePago(datosEmpleado),
            fabricaDeNotificadores.crearNotificadores(datosEmpleado), fabricaDeMetodosDePago.crearMetodoDePago(datosEmpleado), fabricaSindicatos.crearSindicato(datosEmpleado));
        return empleado;
    }

    crearVariosEmpleados() {
        let empleados = [];
        this.listaDeEmpleados.forEach(datosEmpleado => {
            empleados.push(this.crearEmpleado(datosEmpleado));
        });
        return empleados;
    }
}

module.exports = { FabricaDeEmpleados };