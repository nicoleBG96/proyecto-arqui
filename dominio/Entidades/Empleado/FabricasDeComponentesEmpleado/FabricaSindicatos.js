let SindicatoIndustria = require('../../Empleado/Sindicatos/SindicatoIndustria').SindicatoIndustria;
let SindicatoInterEmpresa = require('../../Empleado/Sindicatos/SindicatoInterEmpresa').SindicatoInterEmpresa;
let SindicatoObreros = require('../../Empleado/Sindicatos/SindicatoObreros').SindicatoObreros;

class FabricaSindicatos{
    constructor(){

    }

    crearSindicato(empleado){
        switch (empleado.Sindicato) {
            case "SindicatoIndustria":
                return new SindicatoIndustria();
            case "SindicatoInterEmpresa":
                return new SindicatoInterEmpresa();
            case "SindicatoObreros":
                return new SindicatoObreros();
        }
        return null;
    }
}

module.exports = { FabricaSindicatos };