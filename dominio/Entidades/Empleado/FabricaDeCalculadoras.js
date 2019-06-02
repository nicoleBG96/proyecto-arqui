import { CalculadoraSalarioEmpleadoFijo } from '../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoFijo';
import { CalculadoraSalarioEmpleadoParcial } from '../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoParcial';
import { CalculadoraSalarioEmpleadoPorComision } from '../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoPorComision';

class FabricaDeCalculadoras {
    constructor() {

    }

    crearCalculadora(empleado) {
        switch (empleado.Tipo) {
            case "Fijo":
                return new CalculadoraSalarioEmpleadoFijo(empleado.Salario, empleado.FechaInicio);
            case "Parcial": 
                let repositorioDeTarjetasDeAsistencia = new
                return new CalculadoraSalarioEmpleadoFijo(empleado.SalarioPorHora, empleado.FechaInicio);
            case "PorComision":
                return new CalculadoraSalarioEmpleadoFijo(empleado.SalarioBase, empleado.FechaInicio);
        }
    }
}