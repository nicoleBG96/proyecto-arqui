let PagoPorCheque = require('../../Empleado/MetodoDePago/PagoPorCheque').PagoPorCheque;
let PagoPorDeposito = require('../../Empleado/MetodoDePago/PagoPorDeposito').PagoPorDeposito;
let PagoPorEfectivo = require('../../Empleado/MetodoDePago/PagoPorEfectivo').PagoPorEfectivo;

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