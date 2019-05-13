export class CalculadoraMontosEmpleadoPorComision {
    constructor(salarioBase, tarjetaDeVentas) {
        this.salarioBase = salarioBase;
        this.tarjetaDeVentas = tarjetaDeVentas;
    }

    calcularSalarioBasico() {
        return this.salarioBase + this.tarjetaDeVentas.calcularTotalDeComisiones();
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