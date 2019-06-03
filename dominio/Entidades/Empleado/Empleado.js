class Empleado {
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

    obtenerNombre(){
        return this.nombre;
    }

    obtenerCodigo(){
        return this.codigo;
    }

    obtenerCi(){
        return this.ci;
    }

    obtenerCargo(){
        return this.cargo;
    }

    esSuDiaDePaga(fecha) {
        return this.verificadorFechaDePago.esFechaDePago(fecha);
    }

    calcularSalarioAPagar() {
        return this.calculadoraDeMontos.calcularSalarioAPagar();
    }
}

module.exports = { Empleado };