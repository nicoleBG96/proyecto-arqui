import { CalculadoraMontosEmpleadoFijo } from '../CalculadorasDeMontos/CalculadoraMontosEmpleadoFijo'

describe ("CalculadoraMontosEmpleadoFijo", function(){
    test("dada una calculadora de empleado fijo con un sueldo basico de 2500, deberia devolver un sueldo basico de 2500", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(2500, 0, 0);
        expect(calculadoraDeSalario.calcularSalarioBasico()).toBe(2500);
    });

    test("dada una calculadora de empleado fijo con un sueldo basico de 7500 y descuento del 20%, deberia devolver un porcentaje de descuesto del 20%", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(7500, 20, 0);
        expect(calculadoraDeSalario.obtenerPorcentajeDescuento()).toBe(20);
    });

    test("dada una calculadora de empleado fijo con un sueldo basico de 9000 y descuento del 15%, deberia devolver un descuesto total de 1350", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(9000, 15, 0);
        expect(calculadoraDeSalario.calcularDescuentoTotal()).toBe(1350);
    });

    test("dada una calculadora de empleado fijo con un sueldo basico de 12000 y aportes del 12%, deberia devolver un porcentaje de aportes del 12%", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(12000, 0, 12);
        expect(calculadoraDeSalario.obtenerPorcentajeAportes()).toBe(12);
    });

    test("dada una calculadora de empleado fijo con un sueldo basico de 9000 y aportes del 12%, deberia devolver un aporte total de 1080", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(9000, 0, 12);
        expect(calculadoraDeSalario.calcularAportesTotales()).toBe(1080);
    });

    test("dada una calculadora de empleado fijo con un sueldo basico de 9000, descuento del 15% y aportes del 15%, deberia devolver un salario a pagar de 6300", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(9000, 15, 15);
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(6300);
    });
})
