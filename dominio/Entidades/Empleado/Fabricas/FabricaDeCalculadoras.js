let CalculadoraSalarioEmpleadoFijo = require('../../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoFijo').CalculadoraSalarioEmpleadoFijo;
let CalculadoraSalarioEmpleadoParcial = require('../../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoParcial').CalculadoraSalarioEmpleadoParcial;
let CalculadoraSalarioEmpleadoPorComision = require('../../Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoPorComision').CalculadoraSalarioEmpleadoPorComision;
let FabricaTarjetaDeAsistencias = require('./FabricaTarjetaDeAsistencias').FabricaTarjetaDeAsistencias;
let FabricaTarjetaDeVentas = require('./FabricaTarjetaDeVentas').FabricaTarjetaDeVentas;

class FabricaDeCalculadoras {
    constructor(fechaActual) {
        this.fechaActual = fechaActual;
    }

    crearCalculadora(empleado) {
        switch (empleado.Tipo) {
            case "Fijo":
                return new CalculadoraSalarioEmpleadoFijo(empleado.Salario, new Date(empleado.FechaInicio), new Date(this.fechaActual));
            case "Parcial":
                let fabricaTarjetaDeAsistencias = new FabricaTarjetaDeAsistencias(empleado);
                return new CalculadoraSalarioEmpleadoParcial(empleado.SalarioPorHora, fabricaTarjetaDeAsistencias.construirTarjetaDeAsistencias(this.fechaActual));
            case "PorComision":
                let fabricaTarjetaDeVentas = new FabricaTarjetaDeVentas(empleado);
                return new CalculadoraSalarioEmpleadoPorComision(empleado.SalarioBase, fabricaTarjetaDeVentas.construirTarjetaDeVentas(this.fechaActual));
        }
    }
}

module.exports = { FabricaDeCalculadoras };