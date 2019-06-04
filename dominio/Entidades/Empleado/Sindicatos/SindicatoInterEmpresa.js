class SindicatoInterEmpresa{
    constructor(){
        this.descuento = 15;
    }

    obtenerBeneficios(){
        console.log("Beneficios del Sindicato Inter Empresa obtenidos");
    }

    obtenerDescuentoSindicato(){
        return this.descuento;
    }
}

module.exports = { SindicatoInterEmpresa };