export class CalculadoraMontosEmpleadoParcial {
    constructor(salarioPorHora, tarjetaDeAsistencia) {
        this.salarioPorHora = salarioPorHora;
        this.tarjetaDeAsistencia = tarjetaDeAsistencia;
    }

    calcularSalarioBasico() {
        return this.salarioPorHora * this.tarjetaDeAsistencia.calcularHorasTrabajadas();
    }

    obtenerPorcentajeDescuento() {
        return 0;
    }

    calcularDescuentoTotal() {
        return 0.0;
    }

    obtenerPorcentajeAportes() {
        return 0;
    }

    calcularAportesTotales() {
        return 0.0;
    }

    calcularSalarioAPagar() {
        return this.calcularSalarioBasico();
    }
}