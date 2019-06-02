import { PagoPorCheque } from '../Empleado/MetodoDePago/PagoPorCheque';
import { PagoPorDeposito } from '../Empleado/MetodoDePago/PagoPorDeposito';
import { PagoPorEfectivo } from '../Empleado/MetodoDePago/PagoPorEfectivo';

class FabricaMetodosDePago{
    constructor(){

    }

    crearMetodoDePago(empleado){
        switch (empleado.MetodoDePago) {
            case "Cheque":
                return new PagoPorCheque();
            case "Deposito":
                return new PagoPorDeposito();
            case "Efectivo":
                return new PagoPorEfectivo();
        }
    }
}

module.exports = { FabricaMetodosDePago };