export class AsistenciaDiaria{
    constructor(fecha, horaIngreso, horaSalida){
        this.fecha = fecha;
        this.horaIngreso = horaIngreso;
        this.horaSalida = horaSalida;
    }
    calcularHorasTrabajadas(){
        return this.horaSalida - this.horaIngreso;
    }
}