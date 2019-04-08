function esViernes(fecha){
    return fecha.getDay() === 5;
}

export class ComprobanteFechaDePagoEmpleadoFijo {
    constructor() {

    }

    esFechaDePago(fecha) {
        function esUltimoViernes(fecha) {
            switch(fecha){
                case 1:
                    return fecha.getDate() >= 22;
                case 3:
                case 5:
                case 8:
                case 10:
                    return fecha.getDate() >= 24;
                default:
                    return fecha.getDate() >= 25;
            }
        }
        if(esViernes(fecha)){
            return esUltimoViernes(fecha);
        }
        return false;
    }
}

export class ComprobanteFechaDePagoEmpleadoParcial {
    constructor() {

    }

    esFechaDePago(fecha) {
        return esViernes(fecha);
    }
}

export class ComprobanteFechaDePagoVendedor {
    constructor() {

    }

    esFechaDePago(fecha) {
        function esSegundoViernes(fecha){
            return fecha.getDate() >= 8 && fecha.getDate() <= 14;
        }
        function esCuartoViernes(fecha){
            return fecha.getDate() >= 22 && fecha.getDate() <= 28;
        }
        if(esViernes(fecha)){
            return esSegundoViernes(fecha) || esCuartoViernes(fecha);
        }
    }
}