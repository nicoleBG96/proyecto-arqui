export function generarBoleta(empleado) {
    let salarioTotal = empleado.calcularSalarioAPagar("25-05-19");
    return "Boleta de Pago \n Empleado: " + empleado.nombre + " \n " + salarioTotal; 
}