import { FabricaDeCalculadoras } from '../Empleado/FabricaDeCalculadoras';
import { FabricaDeVerificadoresFechaDePago } from '../Empleado/FabricaDeVerificadoresFechaDePago';
import { FabricaMetodosDePago } from '../Empleado/FabricaMetodosDePago';
import { FabricaNotificadores } from '../Empleado/FabricaNotificadores';
import { Empleado } from '../Empleado/Empleado';

class FabricaDeEmpleados {
    constructor() {

    }

    crearEmpleado(datosEmpleado) {
        let fabricaDeCalculadoras = new FabricaDeCalculadoras();
        let fabricaDeVerificadoresFechaDePago = new FabricaDeVerificadoresFechaDePago();
        let fabricaDeMetodosDePago = new FabricaMetodosDePago();
        let fabricaDeNotificadores = new FabricaNotificadores();
        let empleado = new Empleado(datosEmpleado.Nombre, datosEmpleado.Codigo, datosEmpleado.Ci, datosEmpleado.Cargo,
            fabricaDeCalculadoras.crearCalculadora(empleado), fabricaDeVerificadoresFechaDePago.crearVerificadorFechaDePago(empleado),
            fabricaDeNotificadores.crearNotificadores(empleado), fabricaDeMetodosDePago.crearMetodoDePago(empleado));
        return empleado;
    }
}

module.exports = { FabricaDeEmpleados };