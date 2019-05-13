export class CalculadoraMontosEmpleadoFijo {
    constructor(salarioBasico, descuento, aportes) {
        this.salarioBasico = salarioBasico;
        this.descuento = descuento;
        this.aportes = aportes;
    }

    calcularSalarioBasico() {
        return this.salarioBasico;
    }

    obtenerPorcentajeDescuento() {
        return this.descuento;
    }

    calcularDescuentoTotal() {
        return this.descuento * this.salarioBasico / 100;
    }

    obtenerPorcentajeAportes() {
        return this.aportes;
    }

    calcularAportesTotales() {
        return this.aportes * this.salarioBasico / 100;
    }

    calcularSalarioAPagar() {
        return this.calcularSalarioBasico() - this.calcularDescuentoTotal() - this.calcularAportesTotales();
    }
}