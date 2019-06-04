class RegistrarVentaPeticion {
    constructor(peticion){
        this.peticion = peticion;
    }

    darFormato(){
        let fecha = new Date(this.peticion.body.Fecha);
        let asistencia = {
            "Fecha" : (fecha.getMonth()+1) + ", " + fecha.getDate() + ", " + fecha.getFullYear(),
            "MontoVendido" : parseInt(this.peticion.body.MontoVendido),
            "PorcentajeDeComision" : parseInt(this.peticion.body.PorcentajeDeComision),
            "CodigoEmpleado" : parseInt(this.peticion.body.CodigoEmpleado)
        };
        return asistencia;
    }
}

module.exports = { RegistrarVentaPeticion };