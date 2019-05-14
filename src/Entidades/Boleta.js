export class Boleta{
    constructor(empleado, fechaDeEmision){
        this.empleado = empleado;
        this.fechaDeEmision = fechaDeEmision;
    }

    obtenerDatosDeBoleta(){
        let datosBoleta = {
            salarioBasico = this.empleado.calcularSalarioBasico(),
            descuentoPorcentaje = this.empleado.obtenerPorcentajeDescuento(),
            descuentoTotal = this.empleado.calcularDescuentoTotal(),
            aportesPorcentaje = this.empleado.obtenerPorcentajeAportes(),
            aportesTotales = this.empleado.calcularAportesTotales(),
            salarioAPagar = this.empleado.calcularSalarioAPagar()
        }
        return datosBoleta;
    }

    renderizarBoleta(datosBoleta){
        return `Boleta de Pago\n
        Fecha: ${this.fechaDeEmision}\n
        Empleado: ${this.empleado.nombre}\n
        Salario Basico: ${datosBoleta.salarioBasico}\n
        Descuento: ${datosBoleta.descuentoPorcentaje}%\n
        Descuento Total: ${datosBoleta.descuentoTotal}\n
        Aportes: ${datosBoleta.aportesPorcentaje}%\n
        Total Aportes: ${datosBoleta.aportesTotales}\n
        Salario Total: ${datosBoleta.salarioAPagar}\n`;
    }

    generarBoletaDelEmpleado(){
        return renderizarBoleta(obtenerDatosDeBoleta());
    }
}