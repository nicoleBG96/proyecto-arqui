export class ComprobanteFechaDePagoEmpleadoFijo {
    constructor() {

    }
    esFechaDePago(fecha) {
        switch (fecha.getMonth()) {
            case 1:
                return fecha.getDate() === 28;
            case 3:
            case 5:
            case 8:
            case 10:
                return fecha.getDate() === 30;
            default:
                return fecha.getDate() === 31;

        }
        return false;
    }
}

export class ComprobanteFechaDePagoEmpleadoParcial {
    constructor() {

    }

    esFechaDePago(fecha) {
        function esSegundoViernes(fecha){
            return fecha.getDate() >= 8 && fecha.getDate() <= 14;
        }
        function esCuartoViernes(fecha){
            return fecha.getDate() >= 22 && fecha.getDate() <= 28;
        }
        if(fecha.getDay() === 5){
            return esSegundoViernes(fecha) || esCuartoViernes(fecha);
        }
    }
}

export class ComprobanteFechaDePagoVendedor {
    constructor() {

    }

    esFechaDePago(fecha) {
        function esViernes(fecha){
            return fecha.getDay() === 5;
        }
        return esViernes(fecha);
    }
}