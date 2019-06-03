let AsistenciaDiaria = require('../../Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/AsistenciaDiaria').AsistenciaDiaria;
let TarjetaDeAsistencias = require('../../Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/TarjetaDeAsistencias').TarjetaDeAsistencias;
let RepositorioAsistenciasMongoDB = require('../../PuertoDeEntidades/RepositorioAsistenciasMongoDB').RepositorioAsistenciasMongoDB;

class ConstructorTarjetaDeAsistencias{
    constructor(empleado){
        this.empleado = empleado;
    }

    async recuperarAsistenciasDelEmpleado(){
        let repositorioAsistenciasMongoDB = new RepositorioAsistenciasMongoDB();
        let asistencias = await repositorioAsistenciasMongoDB.recuperarAsistenciasDeEmpleado(this.empleado.Codigo);
        return asistencias;
    }

    seleccionarUltimasAsistencias(asistencias){
        let ultimasAsistencias = [];
        let fechaActual = new Date();
        asistencias.forEach(asistencia => {
            if(asistencia.Dia > fechaActual.getDate() - 7){
                ultimasAsistencias.push(asistencia);
            }
        });
        return ultimasAsistencias;
    }

    construirTarjetaDeAsistencias(){
        let asistencias = this.recuperarAsistenciasDelEmpleado();
        let ultimasAsistencias = this.seleccionarUltimasAsistencias(asistencias);
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        ultimasAsistencias.forEach(asistencia => {
            let asistenciaDiaria = new AsistenciaDiaria(new Date(), asistencia.HoraIngreso, asistencia.HoraSalida);
            tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        });
        return tarjetaDeAsistencias;
    }
}

module.exports = { ConstructorTarjetaDeAsistencias };