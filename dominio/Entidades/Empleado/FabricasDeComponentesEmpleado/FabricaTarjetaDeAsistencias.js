let AsistenciaDiaria = require('../CalculadorasDeSalario/EmpleadoTiempoParcial/AsistenciaDiaria').AsistenciaDiaria;
let TarjetaDeAsistencias = require('../CalculadorasDeSalario/EmpleadoTiempoParcial/TarjetaDeAsistencias').TarjetaDeAsistencias;

class FabricaTarjetaDeAsistencias{
    constructor(empleado){
        this.empleado = empleado;
    }

    seleccionarAsistenciasDelEmpleado(listaDeAsistencias){
        let asistenciasEmpleado = [];
        listaDeAsistencias.forEach(asistencia => {
            if(asistencia.CodigoEmpleado === this.empleado.Codigo){
                asistenciasEmpleado.push(asistencia);
            }
        });
        return asistenciasEmpleado;
    }

    obtenerFechaMinima(){

    }

    seleccionarUltimasAsistencias(asistencias, fechaActual){
        let ultimasAsistencias = [];
        asistencias.forEach(asistencia => {
            let fechaAsistencia = new Date(asistencia.Fecha);
            let fechaMinima = new Date(fechaActual);
            fechaMinima.setDate(fechaActual.getDate() - 7);
            if(fechaAsistencia.getTime() >= fechaMinima.getTime()){
                ultimasAsistencias.push(asistencia);
            }
        });
        return ultimasAsistencias;
    }

    construirTarjetaDeAsistenciasDelEmpleado(listaDeAsistencias, fechaActual){
        let asistencias = this.seleccionarAsistenciasDelEmpleado(listaDeAsistencias);
        let ultimasAsistencias = this.seleccionarUltimasAsistencias(asistencias, fechaActual);
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        ultimasAsistencias.forEach(asistencia => {
            let asistenciaDiaria = new AsistenciaDiaria(new Date(asistencia.Fecha), asistencia.HoraIngreso, asistencia.HoraSalida);
            tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        });
        return tarjetaDeAsistencias;
    }
}

module.exports = { FabricaTarjetaDeAsistencias };