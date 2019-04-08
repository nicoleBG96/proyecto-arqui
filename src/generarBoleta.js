export function generarBoleta(empleado, fecha) {
    let salarioTotal = empleado.calcularSalarioAPagar(fecha);
    return "Boleta de Pago \n Empleado: " + empleado.nombre + " \n " + salarioTotal; 
}