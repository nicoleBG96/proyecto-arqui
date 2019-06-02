import { VerificadorFechaDePagoEmpleadoFijo } from '../Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoFijo';
import { VerificadorFechaDePagoEmpleadoParcial } from '../Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoParcial';
import { VerificadorFechaDePagoEmpleadoPorComision } from '../Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoPorComision';

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