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
        return true;
    }
}

export class ComprobanteFechaDePagoVendedor {
    constructor() {

    }

    esFechaDePago(fecha) {
        return true;
    }
}