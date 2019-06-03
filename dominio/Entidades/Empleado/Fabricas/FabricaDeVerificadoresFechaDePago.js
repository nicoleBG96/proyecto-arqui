let VerificadorFechaDePagoEmpleadoFijo = require('../../Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoFijo').VerificadorFechaDePagoEmpleadoFijo;
let VerificadorFechaDePagoEmpleadoParcial = require('../../Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoParcial').VerificadorFechaDePagoEmpleadoParcial;
let VerificadorFechaDePagoEmpleadoPorComision = require('../../Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoPorComision').VerificadorFechaDePagoEmpleadoPorComision;

class FabricaDeVerificadoresFechaDePago{
    constructor(){

    }

    crearVerificadorFechaDePago(empleado) {
        switch (empleado.Tipo) {
            case "Fijo":
                return new VerificadorFechaDePagoEmpleadoFijo();
            case "Parcial":
                return new VerificadorFechaDePagoEmpleadoParcial();
            case "PorComision":
                return new VerificadorFechaDePagoEmpleadoPorComision(empleado.FechaInicio);
        }
    }
}

module.exports = { FabricaDeVerificadoresFechaDePago };