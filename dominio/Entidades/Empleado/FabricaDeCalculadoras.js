import { CalculadoraSalarioEmpleadoFijo } from '../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoFijo';
import { CalculadoraSalarioEmpleadoParcial } from '../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoParcial';
import { CalculadoraSalarioEmpleadoPorComision } from '../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoPorComision';
import { ConstructorTarjetaDeAsistencias } from '../../PuertoDeEntidades/Constructores/ConstructorTarjetaDeAsistencias';
import { ConstructorTarjetaDeVentas } from '../../PuertoDeEntidades/Constructores/ConstructorTarjetaDeVentas';


class FabricaDeCalculadoras {
    constructor() {

    }

    crearCalculadora(empleado) {
        switch (empleado.Tipo) {
            case "Fijo":
                return new CalculadoraSalarioEmpleadoFijo(empleado.Salario, empleado.FechaInicio);
            case "Parcial":
                let constructorTarjetaDeAsistencias = new ConstructorTarjetaDeAsistencias(empleado);
                return new CalculadoraSalarioEmpleadoParcial(empleado.SalarioPorHora, constructorTarjetaDeAsistencias.construirTarjetaDeAsistencias());
            case "PorComision":
                let constructorTarjetaDeVentas = new ConstructorTarjetaDeVentas(empleado);
                return new CalculadoraSalarioEmpleadoPorComision(empleado.SalarioBase, constructorTarjetaDeVentas.construirTarjetaDeVentas());
        }
    }
}

module.exports = { FabricaDeCalculadoras };