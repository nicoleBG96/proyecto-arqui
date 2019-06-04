class RegistrarAsistenciaPeticion {
    constructor(peticion){
        this.peticion = peticion;
    }

    darFormato(){
        let fecha = new Date(this.peticion.body.Fecha);
        let asistencia = {
            "Fecha" : (fecha.getMonth()+1) + ", " + fecha.getDate() + ", " + fecha.getFullYear(),
            "HoraInicio" : parseInt(this.peticion.body.HoraInicio),
            "HoraFinal" : parseInt(this.peticion.body.HoraFinal),
            "CodigoEmpleado" : parseInt(this.peticion.body.CodigoEmpleado)
        };
        return asistencia;
    }
}

module.exports = { RegistrarAsistenciaPeticion };