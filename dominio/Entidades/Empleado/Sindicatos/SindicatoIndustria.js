class SindicatoIndustria{
    constructor(){
        this.descuento = 10;
    }

    obtenerBeneficios(){
        console.log("Beneficios del Sindicato Industria obtenidos");
    }

    obtenerDescuentoSindicato(){
        return this.descuento;
    }
}

module.exports = { SindicatoIndustria };