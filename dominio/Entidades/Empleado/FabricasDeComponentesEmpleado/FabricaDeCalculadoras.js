let CalculadoraSalarioEmpleadoFijo = require('../CalculadorasDeSalario/CalculadoraSalarioEmpleadoFijo').CalculadoraSalarioEmpleadoFijo;
let CalculadoraSalarioEmpleadoParcial = require('../CalculadorasDeSalario/CalculadoraSalarioEmpleadoParcial').CalculadoraSalarioEmpleadoParcial;
let CalculadoraSalarioEmpleadoPorComision = require('../CalculadorasDeSalario/CalculadoraSalarioEmpleadoPorComision').CalculadoraSalarioEmpleadoPorComision;
let FabricaTarjetaDeAsistencias = require('./FabricaTarjetaDeAsistencias').FabricaTarjetaDeAsistencias;
let FabricaTarjetaDeVentas = require('./FabricaTarjetaDeVentas').FabricaTarjetaDeVentas;

class FabricaDeCalculadoras {
    constructor(listaDeAsistencias, listaDeVentas, fechaActual) {
        this.listaDeAsistencias = listaDeAsistencias;
        this.listaDeVentas = listaDeVentas;
        this.fechaActual = fechaActual;
    }

    crearCalculadora(empleado) {
        switch (empleado.Tipo) {
            case "Fijo":
                return new CalculadoraSalarioEmpleadoFijo(empleado.Salario, new Date(empleado.FechaInicio), this.fechaActual);
            case "Parcial":
                let fabricaTarjetaDeAsistencias = new FabricaTarjetaDeAsistencias(empleado);
                return new CalculadoraSalarioEmpleadoParcial(empleado.SalarioPorHora, fabricaTarjetaDeAsistencias.construirTarjetaDeAsistenciasDelEmpleado(this.listaDeAsistencias, this.fechaActual));
            case "PorComision":
                let fabricaTarjetaDeVentas = new FabricaTarjetaDeVentas(empleado);
                return new CalculadoraSalarioEmpleadoPorComision(empleado.SalarioBase, fabricaTarjetaDeVentas.construirTarjetaDeVentasDelEmpleado(this.listaDeVentas, this.fechaActual));
        }
    }
}

module.exports = { FabricaDeCalculadoras };