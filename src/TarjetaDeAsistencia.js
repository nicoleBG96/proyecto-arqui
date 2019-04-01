export class TarjetaDeAsistencia{
    constructor(){
        this.asistencias = [];
    }
    registrarAsistencia(asistenciaDiaria){
        this.asistencias.push(asistenciaDiaria);
    }
    calcularHorasTrabajadas(){
        let horasTrabajadas = 0;
        this.asistencias.forEach(asistencia => {
            horasTrabajadas = horasTrabajadas + asistencia.horasTrabajadas();
        });
        return horasTrabajadas;
    }
}