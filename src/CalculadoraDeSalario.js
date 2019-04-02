export class CalculadoraEmpleadoFijo {
    constructor(salarioBasico, descuento, aportes) {
        this.salarioBasico = salarioBasico;
        this.descuento = descuento;
        this.aportes = aportes;
    }

    calcularSalario() {
        let aporteTotal = this.salarioBasico * this.aportes /100;
        let descuentoTotal = this.descuento * this.salarioBasico /100;
        return "Salario Basico: " + this.salarioBasico + "\n Descuento: " + this.descuento + "% \n Descuento Total: " + descuentoTotal + "\n Aportes: " + this.aportes + "%\n Total Aportes: " + aporteTotal + "\n Salario Total: " + (this.salarioBasico - descuentoTotal - aporteTotal);
    }
}

export class CalculadoraEmpleadoParcial {
    constructor(salarioPorHora, tarjetaDeAsistencia) {
        this.salarioPorHora = salarioPorHora;
        this.tarjetaDeAsistencia = tarjetaDeAsistencia;
    }

    calcularSalario() {
        let salarioTotal = this.salarioPorHora * this.tarjetaDeAsistencia.calcularHorasTrabajadas();
        return "Salario Total: " + salarioTotal; 
    }
}

export class CalculadoraVendedor {
    constructor(salarioBasico, ventas) {
        this.salarioBasico = salarioBasico;
        this.ventas = ventas;
    }

    calcularSalario() {
        let salarioTotal = this.salarioBasico + this.ventas.calcularTotalDeComisiones();
        return "Salario Total: " + salarioTotal; 
    }
}