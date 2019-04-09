import {CalculadoraEmpleadoFijo} from '../Calculadoras/CalculadoraDeSalario'
import {ComprobanteFechaDePagoEmpleadoFijo} from '../Comprobantes/ComprobanteFechaDePago'

describe ("Calculadora Empleado Fijo", function(){
    test("dado un sueldo basico de 2500, sin descuentos ni aportes, el sueldo calculado deberia ser 2500", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 2500,0, 0);
        let fecha = new Date('5, 31, 2019');
        expect(calculadoraDeSalario.calcularSalario(fecha)).toBe("Salario Basico: 2500\n Descuento: 0% \n Descuento Total: 0\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 2500");
    });

    test("dado un sueldo basico de 7500, con descuento del 20% y aportes del 15%, el sueldo calculado deberia ser 4875", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 7500,20, 15);
        let fecha = new Date('5, 31, 2019');
        expect(calculadoraDeSalario.calcularSalario(fecha)).toBe("Salario Basico: 7500\n Descuento: 20% \n Descuento Total: 1500\n Aportes: 15%\n Total Aportes: 1125\n Salario Total: 4875");
    });

    test("dado un sueldo basico de 5000, con descuento del 25% y ningun aporte, el sueldo calculado deberia ser 3750", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 5000,25, 0);
        let fecha = new Date('5, 31, 2019');
        expect(calculadoraDeSalario.calcularSalario(fecha)).toBe("Salario Basico: 5000\n Descuento: 25% \n Descuento Total: 1250\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 3750");
    });
})
