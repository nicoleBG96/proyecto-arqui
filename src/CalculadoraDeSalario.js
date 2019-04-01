export class CalculadoraEmpleadoFijo {
    constructor(salarioBasico, descuento, aportes) {
        this.salarioBasico = salarioBasico;
        this.descuento = descuento;
        this.aportes = aportes;
    }

    calcularSalario() {
        let aporteTotal = this.salarioBasico * this.aportes /100;
        let descuentoTotal = this.descuento * this.salarioBasico /100;
        return "Salario Basico: " + this.salarioBasico + "\n Descuento: " + this.descuento + "% \n Descuento Total: " + descuentoTotal + "\n Aportes: " + this.aportes + "%\n Total Aportes: " + aporteTotal + "\n Total Salary: " + (this.salarioBasico - descuentoTotal - aporteTotal);
    }
}

export class CalculadoraEmpleadoParcial {
    constructor(salarioPorHora, horasTrabajadas) {
        this.salarioPorHora = salarioPorHora;
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSalario() {
        let salarioTotal = this.salarioPorHora * this.horasTrabajadas;
        return "Salario Total: " + salarioTotal; 
    }
}

export class CalculadoraVendedor {
    constructor(salarioBasico, comisionDeVenta) {
        this.salarioBasico = salarioBasico;
        this.comisionDeVenta = comisionDeVenta;
    }

    calcularSalario() {
        let salarioTotal = this.salarioBasico + this.comisionDeVenta;
        return "Salario Total: " + salarioTotal; 
    }
}