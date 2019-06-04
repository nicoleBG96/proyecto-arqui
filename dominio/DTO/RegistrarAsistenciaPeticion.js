class RegistrarAsistenciaPeticion {
    constructor(peticion){
        this.peticion = peticion;
    }

    darFormato(){
        let fecha = new Date(this.peticion.body.Fecha);
        let asistencia = {
            "Fecha" : (fecha.getMonth()+1) + ", " + fecha.getDate() + ", " + fecha.getFullYear(),
            "HoraIngreso" : parseInt(this.peticion.body.HoraInicio),
            "HoraSalida" : parseInt(this.peticion.body.HoraFinal),
            "CodigoEmpleado" : parseInt(this.peticion.body.CodigoEmpleado)
        };
        return asistencia;
    }
}

module.exports = { RegistrarAsistenciaPeticion };