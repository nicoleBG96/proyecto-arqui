let FabricaDeCalculadoras = require('./FabricaDeCalculadoras').FabricaDeCalculadoras;
let FabricaDeVerificadoresFechaDePago = require('./FabricaDeVerificadoresFechaDePago').FabricaDeVerificadoresFechaDePago;
let FabricaMetodosDePago = require('./FabricaMetodosDePago').FabricaMetodosDePago;
let FabricaNotificadores = require('./FabricaNotificadores').FabricaNotificadores;
let Empleado = require('../Empleado').Empleado;


class FabricaDeEmpleados {
    constructor(fechaActual) {
        this.fechaActual = fechaActual;
    }

    crearEmpleado(datosEmpleado) {
        let fabricaDeCalculadoras = new FabricaDeCalculadoras(this.fechaActual);
        let fabricaDeVerificadoresFechaDePago = new FabricaDeVerificadoresFechaDePago();
        let fabricaDeMetodosDePago = new FabricaMetodosDePago();
        let fabricaDeNotificadores = new FabricaNotificadores();
        let empleado = new Empleado(datosEmpleado.Nombre, datosEmpleado.Codigo, datosEmpleado.Ci, datosEmpleado.Cargo,
            fabricaDeCalculadoras.crearCalculadora(datosEmpleado), fabricaDeVerificadoresFechaDePago.crearVerificadorFechaDePago(datosEmpleado),
            fabricaDeNotificadores.crearNotificadores(datosEmpleado), fabricaDeMetodosDePago.crearMetodoDePago(datosEmpleado));
        return empleado;
    }
}

module.exports = { FabricaDeEmpleados };