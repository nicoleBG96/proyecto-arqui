let Venta = require('../CalculadorasDeSalario/EmpleadoComision/Venta').Venta;
let TarjetaVentas = require('../CalculadorasDeSalario/EmpleadoComision/TarjetaVentas').TarjetaVentas;

class FabricaTarjetaDeVentas{
    constructor(empleado){
        this.empleado = empleado;
    }

    seleccionarVentasDeEmpleado(listaDeVentas){
        let ventasEmpleado = [];
        listaDeVentas.forEach(venta => {
            if(venta.CodigoEmpleado === this.empleado.Codigo){
                ventasEmpleado.push(venta);
            }
        });
        return ventasEmpleado;
    }

    seleccionarUltimasVentas(ventas, fechaActual){
        let ultimasVentas = [];
        ventas.forEach(vent => {
            let fechaVenta = new Date(vent.Fecha);
            let fechaMinima = new Date(fechaActual);
            fechaMinima.setDate(fechaActual.getDate() - 14);
            if(fechaVenta.getTime() >= fechaMinima.getTime()){
                ultimasVentas.push(vent);
            }
        });
        return ultimasVentas;
    }

    construirTarjetaDeVentasDelEmpleado(listaDeVentas, fechaActual){
        let ventas = this.seleccionarVentasDeEmpleado(listaDeVentas);
        let ultimasVentas = this.seleccionarUltimasVentas(ventas, fechaActual);
        let tarjetaVentas = new TarjetaVentas();
        ultimasVentas.forEach(datosVenta => {
            let venta = new Venta(new Date(datosVenta.Fecha), datosVenta.MontoVendido, datosVenta.PorcentajeDeComision);
            tarjetaVentas.registrarVenta(venta);
        });
        return tarjetaVentas;
    }
}

module.exports = { FabricaTarjetaDeVentas };