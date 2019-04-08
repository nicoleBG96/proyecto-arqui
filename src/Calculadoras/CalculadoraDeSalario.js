export class CalculadoraEmpleadoFijo {
    constructor(comprobanteFechaDePago, salarioBasico, descuento, aportes) {
        this.comprobanteFechaDePago = comprobanteFechaDePago;
        this.salarioBasico = salarioBasico;
        this.descuento = descuento;
        this.aportes = aportes;
    }

    calcularSalario(fecha) {
        if (this.comprobanteFechaDePago.esFechaDePago(fecha)) {
            let aporteTotal = this.salarioBasico * this.aportes / 100;
            let descuentoTotal = this.descuento * this.salarioBasico / 100;
            return "Salario Basico: " + this.salarioBasico + "\n Descuento: " + this.descuento + "% \n Descuento Total: " + descuentoTotal + "\n Aportes: " + this.aportes + "%\n Total Aportes: " + aporteTotal + "\n Salario Total: " + (this.salarioBasico - descuentoTotal - aporteTotal);
        } else {
            return "No es fecha de pago del empleado";
        }
    }
}

export class CalculadoraEmpleadoParcial {
    constructor(comprobanteFechaDePago,salarioPorHora, tarjetaDeAsistencia) {
        this.comprobanteFechaDePago = comprobanteFechaDePago;
        this.salarioPorHora = salarioPorHora;
        this.tarjetaDeAsistencia = tarjetaDeAsistencia;
    }

    calcularSalario(fecha) {
        if (this.comprobanteFechaDePago.esFechaDePago(fecha)) {
            let salarioTotal = this.salarioPorHora * this.tarjetaDeAsistencia.calcularHorasTrabajadas();
            return "Salario Total: " + salarioTotal;
        } else {
            return "No es fecha de pago del empleado";
        }
    }
}

export class CalculadoraVendedor {
    constructor(comprobanteFechaDePago, salarioBasico, ventas) {
        this.comprobanteFechaDePago = comprobanteFechaDePago;
        this.salarioBasico = salarioBasico;
        this.ventas = ventas;
    }

    calcularSalario(fecha) {
        if (this.comprobanteFechaDePago.esFechaDePago(fecha)) {
            let salarioTotal = this.salarioBasico + this.ventas.calcularTotalDeComisiones();
            return "Salario Total: " + salarioTotal;
        } else {
            return "No es fecha de pago del empleado";
        }
    }
}