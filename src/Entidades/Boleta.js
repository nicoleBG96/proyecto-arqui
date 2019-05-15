export class Boleta{
    constructor(empleado, fechaDeEmision){
        this.empleado = empleado;
        this.fechaDeEmision = fechaDeEmision;
    }

    obtenerDatosDeBoleta(){
        let datosBoleta = {
            salarioBasico : this.empleado.calcularSalarioBasico(),
            descuentoPorcentaje : this.empleado.obtenerPorcentajeDescuento(),
            descuentoTotal : this.empleado.calcularDescuentoTotal(),
            aportesPorcentaje : this.empleado.obtenerPorcentajeAportes(),
            aportesTotales : this.empleado.calcularAportesTotales(),
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

    renderizarBoleta(datosBoleta, datosEmpleado){
        return `Boleta de Pago\n
        Fecha: ${this.fechaDeEmision}\n
        Empleado: ${datosEmpleado.nombreEmpleado}\n
        Codigo: ${datosEmpleado.codigoEmpleado}\n
        Ci: ${datosEmpleado.ciEmpleado}\n
        Cargo: ${datosEmpleado.cargoEmpleado}\n
        Salario Basico: ${datosBoleta.salarioBasico}\n
        Descuento: ${datosBoleta.descuentoPorcentaje}%\n
        Descuento Total: ${datosBoleta.descuentoTotal}\n
        Aportes: ${datosBoleta.aportesPorcentaje}%\n
        Total Aportes: ${datosBoleta.aportesTotales}\n
        Salario Total: ${datosBoleta.salarioAPagar}\n`;
    }

    generarBoletaDelEmpleado(){
        return this.renderizarBoleta(this.obtenerDatosDeBoleta(), this.obtenerDatosDelEmpleado());
    }
}