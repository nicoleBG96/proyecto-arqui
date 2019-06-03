class Boleta{
    constructor(empleado, fechaDeEmision){
        this.empleado = empleado;
        this.fechaDeEmision = fechaDeEmision;
    }

    obtenerDatosDeBoleta(){
        let datosBoleta = {
            salarioAPagar : this.empleado.calcularSalarioAPagar()
        }
        return datosBoleta;
    }

    obtenerDatosDelEmpleado(){
        let datosEmpleado = {
            nombreEmpleado : this.empleado.obtenerNombre(),
            codigoEmpleado : this.empleado.obtenerCodigo(),
            ciEmpleado : this.empleado.obtenerCi(),
            cargoEmpleado : this.empleado.obtenerCargo(),
        }
        return datosEmpleado;
    }

    renderizarFechaEmision(){
        return (this.fechaDeEmision.getMonth() + 1) + ", " + this.fechaDeEmision.getDate() + ", " + this.fechaDeEmision.getFullYear();
    }

    renderizarBoleta(datosBoleta, datosEmpleado){
        return {
            "FechaEmision" : this.renderizarFechaEmision(),
            "NombreEmpleado" : datosEmpleado.nombreEmpleado,
            "CodigoEmpleado" : datosEmpleado.codigoEmpleado,
            "CiEmpleado" : datosEmpleado.ciEmpleado,
            "CargoEmpleado" : datosEmpleado.cargoEmpleado,
            "SalarioPagado" : datosBoleta.salarioAPagar
        }
    }

    generarBoletaDelEmpleado(){
        return this.renderizarBoleta(this.obtenerDatosDeBoleta(), this.obtenerDatosDelEmpleado());
    }
}

module.exports = { Boleta };