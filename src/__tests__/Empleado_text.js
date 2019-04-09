import {generarBoleta} from '../Generadores/generarBoleta'
import {Empleado} from '../Clases/Empleado'
import {CalculadoraEmpleadoFijo, CalculadoraEmpleadoParcial, CalculadoraVendedor} from '../Calculadoras/CalculadoraDeSalario'
import { TarjetaDeAsistencia } from '../Parcial/TarjetaDeAsistencia';
import { AsistenciaDiaria } from '../Parcial/AsistenciaDiaria';
import {ComprobanteFechaDePagoEmpleadoFijo, ComprobanteFechaDePagoEmpleadoParcial, ComprobanteFechaDePagoVendedor} from '../Comprobantes/ComprobanteFechaDePago';
import { Ventas } from '../Comision/Ventas';
import { TarjetaDeVenta } from '../Comision/TarjetaDeVenta';

describe ("Empleado", function(){
    test("dado un empleado fijo que gana 1100 calcular su salario a pagar", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100,0, 0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Basico: 1100\n Descuento: 0% \n Descuento Total: 0\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 1100");
    });

    test("dado un empleado fijo que gana 1100, al cual se le descuente un 10% calcular su salario a pagar", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100,10, 0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 990");
    });

    test("dado un empleado fijo que gana 1100, al cual se le descuente un 10% y el cual aporta 20% calcular su salario a pagar", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100,10, 20);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 20%\n Total Aportes: 220\n Salario Total: 770");
    });

})