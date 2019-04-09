import {generarBoleta} from '../Generadores/generarBoleta'
import {Empleado} from '../Clases/Empleado'
import {CalculadoraEmpleadoFijo, CalculadoraEmpleadoParcial, CalculadoraVendedor} from '../Calculadoras/CalculadoraDeSalario'
import { TarjetaDeAsistencia } from '../Parcial/TarjetaDeAsistencia';
import { AsistenciaDiaria } from '../Parcial/AsistenciaDiaria';
import {ComprobanteFechaDePagoEmpleadoFijo, ComprobanteFechaDePagoEmpleadoParcial, ComprobanteFechaDePagoVendedor} from '../Comprobantes/ComprobanteFechaDePago';
import { Ventas } from '../Comision/Ventas';
import { TarjetaDeVenta } from '../Comision/TarjetaDeVenta';

describe ("Empleado", function(){
    test("dado un empleado fijo que gana 1100, deberia ganar 1100", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100,0, 0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Basico: 1100\n Descuento: 0% \n Descuento Total: 0\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 1100");
    });

    test("dado un empleado fijo que gana 1100, al cual se le descuenta un 10% deberia ganar 990", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100,10, 0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 990");
    });

    test("dado un empleado fijo que gana 1100, al cual se le descuente un 10% y el cual aporta 20% deberia ganar 770", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100,10, 20);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 20%\n Total Aportes: 220\n Salario Total: 770");
    });

    test("dada un empleado parcial que gana 100 por hora y no tiene horas trabajadadas, deberia ganar 0", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 24, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 0");
    });

    test("dada un empleado parcial que gana 100 por hora y tiene 3 horas trabajadadas, deberia ganar 300", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 24, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 300");
    });

    test("dada un empleado parcial que gana 100 por hora y tiene 10 horas trabajadadas, deberia ganar 1000", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria);
        let asistenciaDiaria2 = new AsistenciaDiaria("31/03/2019", 9, 12);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria2);
        let asistenciaDiaria3 = new AsistenciaDiaria("30/03/2019", 9, 13);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria3);
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 24, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 1000");
    });

    test("dado un empleado vendedor con sueldo basico de 100 y sin ninguna venta registrada, deberia ganar 100", function () {
        let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
        let ventas = new Ventas();
        let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor, 100, ventas);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let fecha = new Date('5, 24, 2019');
        expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 100");
    });
})