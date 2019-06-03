let Venta = require('../../Entidades/Empleado/CalculadorasDeSalario/EmpleadoComision/Venta').Venta;
let TarjetaVentas = require('../../Entidades/Empleado/CalculadorasDeSalario/EmpleadoComision/TarjetaVentas').TarjetaDeAsistencias;
let RepositorioVentasMongoDB = require('../../PuertoDeEntidades/RepositorioVentasMongoDB').RepositorioVentasMongoDB;

class ConstructorTarjetaDeVentas{
    constructor(empleado){
        this.empleado = empleado;
    }

    async recuperarVentasDelEmpleado(){
        let repositorioVentasMongoDB = new RepositorioVentasMongoDB();
        let ventas = await repositorioVentasMongoDB.recuperarVentasDeEmpleado(this.empleado.Codigo);
        return ventas;
    }

    seleccionarUltimasVentas(ventas){
        let ultimasVentas = [];
        let fechaActual = new Date();
        ventas.forEach(venta => {
            if(venta.Dia > fechaActual.getDate() - 14){
                ultimasVentas.push(asistencia);
            }
        });
        return ultimasVentas;
    }

    construirTarjetaDeVentas(){
        let ventas = this.recuperarVentasDeEmpleado();
        let ultimasVentas = this.seleccionarUltimasVentas(ventas);
        let tarjetaVentas = new TarjetaVentas();
        ultimasVentas.forEach(venta => {
            let venta = new Venta(new Date(), venta.MontoVendido, venta.PorcentajeDeComision);
            tarjetaVentas.registrarVenta(venta);
        });
        return tarjetaVentas;
    }
}

module.exports = { ConstructorTarjetaDeVentas };