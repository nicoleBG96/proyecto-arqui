let AsistenciaDiaria = require('../CalculadorasDeSalario/EmpleadoTiempoParcial/AsistenciaDiaria').AsistenciaDiaria;
let TarjetaDeAsistencias = require('../CalculadorasDeSalario/EmpleadoTiempoParcial/TarjetaDeAsistencias').TarjetaDeAsistencias;
let RepositorioAsistenciasMongoDB = require('../../../PuertoDeEntidades/RepositorioAsistenciasMongoDB').RepositorioAsistenciasMongoDB;

class FabricaTarjetaDeAsistencias{
    constructor(empleado){
        this.empleado = empleado;
    }

    async recuperarAsistenciasDelEmpleado(){
        let repositorioAsistenciasMongoDB = new RepositorioAsistenciasMongoDB();
        let asistencias = await repositorioAsistenciasMongoDB.recuperarAsistenciasDeEmpleado(this.empleado.Codigo);
        return asistencias;
    }

    seleccionarUltimasAsistencias(asistencias, fechaActual){
        let ultimasAsistencias = [];
        asistencias.forEach(asistencia => {
            if(asistencia.Dia > fechaActual.getDate() - 7){
                ultimasAsistencias.push(asistencia);
            }
        });
        return ultimasAsistencias;
    }

    construirTarjetaDeAsistencias(fechaActual){
        let asistencias = this.recuperarAsistenciasDelEmpleado();
        let ultimasAsistencias = this.seleccionarUltimasAsistencias(asistencias, new Date(fechaActual));
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        ultimasAsistencias.forEach(asistencia => {
            let asistenciaDiaria = new AsistenciaDiaria(new Date(), asistencia.HoraIngreso, asistencia.HoraSalida);
            tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        });
        return tarjetaDeAsistencias;
    }
}

module.exports = { FabricaTarjetaDeAsistencias };