import { Venta } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoComision/Venta';
import { TarjetaVentas } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoComision/TarjetaVentas'

describe ("TarjetaVentas", function(){
    test("dada una tarjeta de ventas vacia, deberia devolver que la comision total es igual a 0", function () {
        let tarjetaVentas = new TarjetaVentas()
        expect(tarjetaVentas.calcularTotalDeComisiones()).toBe(0);
    });

    test("dada una tarjeta de ventas con 1 venta de 1000 y comision del 50% registrada, deberia devolver que la comision total es igual a 500", function () {
        let tarjetaVentas = new TarjetaVentas();
        let fecha = new Date('5, 10, 2019');
        let venta = new Venta(fecha,1000,50);
        tarjetaVentas.registrarVenta(venta);
        expect(tarjetaVentas.calcularTotalDeComisiones()).toBe(500);
    });

    test("dada una tarjeta de ventas con 2 ventas registradas. una de 5000 al 50% de comision y la otra de 200 al 10% de comision, deberia devolver que la comision total es igual a 1020", function () {
        let tarjetaVentas = new TarjetaVentas();
        let fecha = new Date('5, 10, 2019');
        let venta1 = new Venta(fecha,2000,50);
        let venta2 = new Venta(fecha,200,10);
        tarjetaVentas.registrarVenta(venta1);
        tarjetaVentas.registrarVenta(venta2);
        expect(tarjetaVentas.calcularTotalDeComisiones()).toBe(1020);
    });
})