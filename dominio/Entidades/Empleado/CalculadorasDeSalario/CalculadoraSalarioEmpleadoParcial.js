export class CalculadoraSalarioEmpleadoParcial {
    constructor(salarioPorHora, tarjetaDeAsistencia) {
        this.salarioPorHora = salarioPorHora;
        this.tarjetaDeAsistencia = tarjetaDeAsistencia;
    }

    calcularSalarioAPagar() {
        return this.salarioPorHora * this.calcularTotalHorasTrabajadas();
    }

    calcularTotalHorasTrabajadas(){
        return this.tarjetaDeAsistencia.calcularHorasTrabajadas();
    }
}