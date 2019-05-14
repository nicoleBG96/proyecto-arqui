import { CalculadoraMontosEmpleadoPorComision } from '../CalculadorasDeMontos/CalculadoraMontosEmpleadoPorComision'
import { TarjetaVentas } from '../CalculadorasDeMontos/EmpleadoComision/TarjetaVentas';
import { Venta } from '../CalculadorasDeMontos/EmpleadoComision/Venta';

describe ("CalculadoraMontosEmpleadoPorComision", function(){
    test("dada una calculadora de empleado por comision con un salario basico de 2500, sin ventas realizadas, deberia devolver un salario basico de 2500", function () {
        let tarjetaVentas = new TarjetaVentas();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(2500, tarjetaVentas);
        expect(calculadoraDeSalario.calcularSalarioBasico()).toBe(2500);
    });

    test("dada una calculadora de empleado por comision con un salario basico de 3000, con una venta de 1000 al 50 de comision, deberia devolver un salario basico de 3500", function () {
        let tarjetaVentas = new TarjetaVentas();
        let venta = new Venta("05/03/2019",1000, 50);
        tarjetaVentas.registrarVenta(venta);
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(3000, tarjetaVentas);
        expect(calculadoraDeSalario.calcularSalarioBasico()).toBe(3500);
    });

    test("dada una calculadora de empleado por comision con un salario basico de 2500, con 3 ventas de 100 al 50%, 25% y 10% de comison, deberia devolver un salario a pagar de 2585", function () {
        let tarjetaVentas = new TarjetaVentas();
        let venta1 = new Venta("05/03/2019",100, 50);
        let venta2 = new Venta("05/03/2019",100, 25);
        let venta3 = new Venta("05/03/2019",100, 10);
        tarjetaVentas.registrarVenta(venta1);
        tarjetaVentas.registrarVenta(venta2);
        tarjetaVentas.registrarVenta(venta3);
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(2500, tarjetaVentas);
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(2585);
    });

    test("dada una calculadora de empleado por comision, deberia devolver un porcentaje de descuesto del 0%", function () {
        let tarjetaVentas = new TarjetaVentas();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(300, tarjetaVentas);
        expect(calculadoraDeSalario.obtenerPorcentajeDescuento()).toBe(0);
    });

    test("dada una calculadora de empleado por comision, deberia devolver un descuesto total de 0.0", function () {
        let tarjetaVentas = new TarjetaVentas();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(300, tarjetaVentas);
        expect(calculadoraDeSalario.calcularDescuentoTotal()).toBe(0.0);
    });

    test("dada una calculadora de empleado por comision, deberia devolver un porcentaje de aportes del 0%", function () {
        let tarjetaVentas = new TarjetaVentas();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(300, tarjetaVentas);
        expect(calculadoraDeSalario.obtenerPorcentajeAportes()).toBe(0);
    });

    test("dada una calculadora de empleado por comision, deberia devolver un aporte total de 0.0", function () {
        let tarjetaVentas = new TarjetaVentas();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(300, tarjetaVentas);
        expect(calculadoraDeSalario.calcularAportesTotales()).toBe(0.0);
    });
})