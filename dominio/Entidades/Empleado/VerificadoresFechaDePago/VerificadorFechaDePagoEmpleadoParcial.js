export class VerificadorFechaDePagoEmpleadoParcial {
    constructor() {

    }

    esFechaDePago(fecha) {
        function esViernes(fecha){
            return fecha.getDay() === 5;
        }
        
        return esViernes(fecha);
    }
}