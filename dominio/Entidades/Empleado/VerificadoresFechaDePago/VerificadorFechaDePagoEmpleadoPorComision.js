class VerificadorFechaDePagoEmpleadoPorComision {
    constructor(fechaInicioTrabajo) {
        this.fechaInicioTrabajo = fechaInicioTrabajo;
    }

    esViernes(fecha) {
        return fecha.getDay() === 5;
    }

    obtenerTiempoDesdePrimerViernesPagado(fecha) {
        let primerViernesPagado = fecha;
        while (primerViernesPagado.getDay() != 5) {
            primerViernesPagado.setDate(primerViernesPagado.getDate() + 1);
        }
        return primerViernesPagado.getTime();
    }

    calcularTiempoDesdeLaContratacion(fecha) {
        let tiempoDeDiferencia = Math.abs(fecha.getTime() - this.obtenerTiempoDesdePrimerViernesPagado(this.fechaInicioTrabajo));
        return tiempoDeDiferencia;
    }

    calcularNumeroDeDiasDesdeContratacion(fecha) {
        let tiempoDeDiferencia = this.calcularTiempoDesdeLaContratacion(fecha);
        let diasDeDiferencia = Math.ceil(tiempoDeDiferencia / (1000 * 3600 * 24));
        return diasDeDiferencia;
    }
    esFechaDePago(fechaA) {
        if (this.esViernes(fechaA)) {
            return this.calcularNumeroDeDiasDesdeContratacion(fechaA) % 14 === 0;
        }
        return false;
    }
}

module.exports = { VerificadorFechaDePagoEmpleadoPorComision };