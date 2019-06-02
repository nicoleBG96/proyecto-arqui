import { CalculadoraSalarioEmpleadoPorComision } from '../CalculadorasDeMontos/CalculadoraSalarioEmpleadoPorComision'
import { TarjetaVentas } from '../CalculadorasDeMontos/EmpleadoComision/TarjetaVentas';
import { Venta } from '../CalculadorasDeMontos/EmpleadoComision/Venta';

describe ("CalculadoraMontosEmpleadoPorComision", function(){
    test("dada una calculadora de empleado por comision con un salario basico de 2500, con 3 ventas de 100 al 50%, 25% y 10% de comison, deberia devolver un salario a pagar de 2585", function () {
        let tarjetaVentas = new TarjetaVentas();
        let venta1 = new Venta("05/03/2019",100, 50);
        let venta2 = new Venta("05/03/2019",100, 25);
        let venta3 = new Venta("05/03/2019",100, 10);
        tarjetaVentas.registrarVenta(venta1);
        tarjetaVentas.registrarVenta(venta2);
        tarjetaVentas.registrarVenta(venta3);
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoPorComision(2500, tarjetaVentas);
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(2585);
    });
})