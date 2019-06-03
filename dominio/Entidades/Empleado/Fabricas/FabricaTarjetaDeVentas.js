let Venta = require('../CalculadorasDeSalario/EmpleadoComision/Venta').Venta;
let TarjetaVentas = require('../CalculadorasDeSalario/EmpleadoComision/TarjetaVentas').TarjetaDeAsistencias;
let RepositorioVentasMongoDB = require('../../../PuertoDeEntidades/RepositorioVentasMongoDB').RepositorioVentasMongoDB;

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
        ventas.forEach(venta => {
            if(venta.Dia > fechaActual.getDate() - 14){
                ultimasVentas.push(asistencia);
            }
        });
        return ultimasVentas;
    }

    construirTarjetaDeVentasDelEmpleado(listaDeVentas, fechaActual){
        let ventas = this.seleccionarVentasDeEmpleado(listaDeVentas);
        let ultimasVentas = this.seleccionarUltimasVentas(ventas, new Date(fechaActual));
        let tarjetaVentas = new TarjetaVentas();
        ultimasVentas.forEach(venta => {
            let venta = new Venta(new Date(venta.Fecha), venta.MontoVendido, venta.PorcentajeDeComision);
            tarjetaVentas.registrarVenta(venta);
        });
        return tarjetaVentas;
    }
}

module.exports = { FabricaTarjetaDeVentas };