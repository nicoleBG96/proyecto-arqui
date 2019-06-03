let CalculadoraSalarioEmpleadoFijo = require('../../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoFijo').CalculadoraSalarioEmpleadoFijo;
let CalculadoraSalarioEmpleadoParcial = require('../../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoParcial').CalculadoraSalarioEmpleadoParcial;
let CalculadoraSalarioEmpleadoPorComision = require('../../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoPorComision').CalculadoraSalarioEmpleadoPorComision;
let ConstructorTarjetaDeAsistencias = require('../../../PuertoDeEntidades/Constructores/ConstructorTarjetaDeAsistencias').ConstructorTarjetaDeAsistencias;
let ConstructorTarjetaDeVentas = require('../../../PuertoDeEntidades/Constructores/ConstructorTarjetaDeVentas').ConstructorTarjetaDeVentas;

class FabricaDeCalculadoras {
    constructor() {

    }

    crearCalculadora(empleado) {
        switch (empleado.Tipo) {
            case "Fijo":
                return new CalculadoraSalarioEmpleadoFijo(empleado.Salario, new Date(empleado.FechaInicio));
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