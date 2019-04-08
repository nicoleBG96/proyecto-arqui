export class Empleado {
    constructor(nombre, id, ci, cargo, calculadoraDeSalario){
        this.nombre = nombre;
        this.id = id;
        this.ci = ci;
        this.cargo = cargo;
        this.calculadoraDeSalario = calculadoraDeSalario;
    }

    calcularSalarioAPagar(fecha){
        return this.calculadoraDeSalario.calcularSalario(fecha);
    }
}

