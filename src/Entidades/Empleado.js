export class Empleado {
    constructor(nombre, codigo, ci, cargo, calculadoraDeMontos, verificadorFechaDePago, notificadorDePago, metodoDePago) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.ci = ci;
        this.cargo = cargo;
        this.calculadoraDeMontos = calculadoraDeMontos;
        this.verificadorFechaDePago = verificadorFechaDePago;
        this.notificadorDePago = notificadorDePago;
        this.metodoDePago = metodoDePago;
        this.fechaDeIngreso = new Date();
    }

    esSuDiaDePaga(fecha) {
        return verificadorFechaDePago.esDiaDePaga(fecha);
    }

    calcularSalarioBasico() {
        return this.calculadoraDeMontos.calcularSalario();
    }

    obtenerPorcentajeDescuento() {
        return this.calculadoraDeMontos.obtenerPorcentajeDescuento();
    }

    calcularDescuentoTotal() {
        return this.calculadoraDeMontos.calcularDescuentoTotal();
    }

    obtenerPorcentajeAportes() {
        return this.calculadoraDeMontos.obtenerPorcentajeAportes();
    }

    calcularAportesTotales() {
        return this.calculadoraDeMontos.calcularAportesTotales();
    }

    calcularSalarioAPagar() {
        return this.calculadoraDeMontos.calcularSalarioAPagar();
    }
}

