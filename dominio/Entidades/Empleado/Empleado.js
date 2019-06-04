class Empleado {
    constructor(nombre, codigo, ci, cargo, calculadoraDeMontos, verificadorFechaDePago, notificadorDePago, metodoDePago, sindicato) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.ci = ci;
        this.cargo = cargo;
        this.calculadoraDeMontos = calculadoraDeMontos;
        this.verificadorFechaDePago = verificadorFechaDePago;
        this.notificadorDePago = notificadorDePago;
        this.metodoDePago = metodoDePago;
        this.fechaDeIngreso = new Date();
        this.sindicato = sindicato;
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

    obtenerSindicato(){
        return this.sindicato;
    }

    esSuDiaDePaga(fecha) {
        return this.verificadorFechaDePago.esFechaDePago(fecha);
    }

    perteneceAUnSindicato(){
        return this.sindicato !== null;
    }

    aplicarDescuentoSindicato(salario){
        let descuento = this.sindicato.obtenerDescuentoSindicato();
        return salario - (salario * descuento / 100);
    }

    calcularSalarioAPagar() {
        let salario = this.calculadoraDeMontos.calcularSalarioAPagar();
        if(this.perteneceAUnSindicato()){
            salario = this.aplicarDescuentoSindicato(salario);
            this.sindicato.obtenerBeneficios();
        }
        return salario;
    }

    enviarNotificacion(){
        this.notificadorDePago.enviarNotificacion();
    }

    efectuarPago(){
        this.metodoDePago.efectuarPago();
    }
}

module.exports = { Empleado };