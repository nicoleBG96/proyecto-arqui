export class TarjetaDeAsistencias{
    constructor(){
        this.asistencias = [];
    }

    registrarAsistencia(asistenciaDiaria){
        this.asistencias.push(asistenciaDiaria);
    }

    registrarAsistencias(asistencias){
        this.asistencias = asistencias;
    }

    calcularHorasTrabajadas(){
        let horasTrabajadas = 0;
        this.asistencias.forEach(asistencia => {
            horasTrabajadas = horasTrabajadas + asistencia.calcularHorasTrabajadas();
        });
        return horasTrabajadas;
    }
}