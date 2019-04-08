export function generarBoleta(empleado) {
    let salarioTotal = empleado.calcularSalarioAPagar();
    return "Boleta de Pago \n Empleado: " + empleado.nombre + " \n " + salarioTotal; 
}