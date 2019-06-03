import { CalculadoraSalarioEmpleadoFijo } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoFijo'

describe ("CalculadoraSalarioEmpleadoFijo", function(){
    test("dada una calculadora de empleado fijo con un sueldo basico de 2500 y que entro en anio pasado deberia devolver un sueldo basico de 2500", function () {
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoFijo(2500, new Date('6, 3, 2018'), new Date('6, 28, 2019'));
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(2500);
    });

    test("dada una calculadora de empleado fijo con un sueldo basico de 2500 y que solo lleva 3 semanas trabajando deberia devolver un sueldo basico de 1875", function () {
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoFijo(2500, new Date('6, 10, 2019'), new Date('6, 28, 2019'));
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(1875);
    });

    test("dada una calculadora de empleado fijo con un sueldo basico de 2500 y que solo lleva 2 semanas trabajando devolver un sueldo basico de 1250", function () {
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoFijo(2500, new Date('6, 17, 2019'), new Date('6, 28, 2019'));
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(1250);
    });
})
