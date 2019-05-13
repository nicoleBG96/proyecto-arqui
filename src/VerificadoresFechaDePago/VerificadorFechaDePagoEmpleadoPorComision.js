export class VerificadorFechaDePagoEmpleadoPorComision {
    constructor(fechaInicioTrabajo) {
        this.fechaInicioTrabajo = fechaInicioTrabajo;
    }

    esFechaDePago(fecha) {
        function esViernes(fecha){
            return fecha.getDay() === 5;
        }

        function obtenerTiempoDesdePrimerViernesPagado(fecha){
            let primerViernesPagado = fecha;
            while(primerViernesPagado.getDay() != 5){
                primerViernesPagado.setDate(primerViernesPagado.getDate()+1);
            }
            return primerViernesPagado.getTime();
        }

        function calcularTiempoDesdeLaContratacion(fecha){
            let tiempoDeDiferencia = Math.abs(fecha.getTime() - obtenerTiempoDesdePrimerViernesPagado(this.fechaInicioTrabajo));
            return tiempoDeDiferencia;
        }

        function calcularNumeroDeDiasDesdeContratacion(fecha) {
            let tiempoDeDiferencia = calcularTiempoDesdeLaContratacion(fecha);
            let diasDeDiferencia = Math.ceil(tiempoDeDiferencia / (1000 * 3600 * 24));
            return diasDeDiferencia;
        }

        if(esViernes(fecha)){
            return calcularNumeroDeDiasDesdeContratacion(fecha) % 14 == 0;
        }
        return false;
    }
}