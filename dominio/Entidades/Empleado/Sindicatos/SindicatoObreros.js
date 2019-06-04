class SindicatoObreros{
    constructor(){
        this.descuento = 20;
    }

    obtenerBeneficios(){
        console.log("Beneficios del Sindicato Obreros obtenidos");
    }

    obtenerDescuentoSindicato(){
        return this.descuento;
    }
}

module.exports = { SindicatoObreros };