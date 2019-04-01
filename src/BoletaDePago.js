export function generarBoleta(empleado) {
    let salarioTotal = empleado.calcularSalarioAPagar();
    return "Boleta \n Empleado: " + empleado.nombre + " \n " + salarioTotal; 
}