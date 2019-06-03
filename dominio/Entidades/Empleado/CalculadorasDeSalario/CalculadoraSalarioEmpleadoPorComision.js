class CalculadoraSalarioEmpleadoPorComision {
    constructor(salarioBase, tarjetaDeVentas) {
        this.salarioBase = salarioBase;
        this.tarjetaDeVentas = tarjetaDeVentas;
    }

    calcularSalarioAPagar() {
        return this.salarioBase + this.calcularTotalComisionVentas();
    }

    calcularTotalComisionVentas(){
        return this.tarjetaDeVentas.calcularTotalDeComisiones();
    }

}

module.exports = { CalculadoraSalarioEmpleadoPorComision };