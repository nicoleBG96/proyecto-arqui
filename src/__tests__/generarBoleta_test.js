import { generarBoleta } from '../Generadores/generarBoleta'
import { Empleado } from '../Clases/Empleado'
import { CalculadoraEmpleadoFijo, CalculadoraEmpleadoParcial, CalculadoraVendedor } from '../Calculadoras/CalculadoraDeSalario'
import { TarjetaDeAsistencia } from '../Parcial/TarjetaDeAsistencia';
import { AsistenciaDiaria } from '../Parcial/AsistenciaDiaria';
import { ComprobanteFechaDePagoEmpleadoFijo, ComprobanteFechaDePagoEmpleadoParcial, ComprobanteFechaDePagoVendedor } from '../Comprobantes/ComprobanteFechaDePago';
import { Ventas } from '../Comision/Ventas';
import { TarjetaDeVenta } from '../Comision/TarjetaDeVenta';

describe("generarBoleta", function () {
    test("dada una boleta de pago con nombre y salario de un empleado fijo", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100, 0, 0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 0% \n Descuento Total: 0\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 1100\n");
    });

    test("dada una boleta de pago con nombre y salario de un empleado fijo con descuento del 10 porciento", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100, 10, 0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 990\n");
    });

    test("dada una boleta de pago con nombre y salario de un empleado fijo con descuento del 10 porciento y aporte del 10 porciento", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100, 10, 10);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 31, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 10%\n Total Aportes: 110\n Salario Total: 880\n");
    });

    test("dada una boleta de pago con nombre y salario de un empleado parcial sin horas trabajadas", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 24, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 0\n");
    });

    test("dada una boleta de pago con nombre y salario de un empleado parcial con 3 horas trabajadas", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 24, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 300\n");
    });

    test("dada una boleta de pago con nombre y salario de un empleado parcial con 3 horas trabajadas", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let asistenciaDiaria1 = new AsistenciaDiaria("28/03/2019", 9, 12);
        let asistenciaDiaria2 = new AsistenciaDiaria("29/03/2019", 9, 12);
        let asistenciaDiaria3 = new AsistenciaDiaria("30/03/2019", 8, 12);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria1);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria2);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria3);
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 24, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 1000\n");
    });

    test("dada una boleta de pago con nombre y salario de un empleado vendedor con ninguna venta registrada", function () {
        let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
        let ventas = new Ventas();
        let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor, 100, ventas);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 24, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 100\n");
    });

    test("dada una boleta de pago con nombre y salario de un empleado vendedor con 2 ventas registradas", function () {
        let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
        let ventas = new Ventas();
        let tarjetaDeVenta1 = new TarjetaDeVenta("05/03/2019", 1000, 50);
        ventas.registrarVenta(tarjetaDeVenta1);
        let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor, 100, ventas);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 10, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 600\n");
    });

    test("dada una boleta de pago con nombre y salario de un empleado vendedor con 2 ventas registradas", function () {
        let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
        let ventas = new Ventas();
        let tarjetaDeVenta1 = new TarjetaDeVenta("05/03/2019", 1000, 50);
        let tarjetaDeVenta2 = new TarjetaDeVenta("20/04/2019", 300, 10);
        ventas.registrarVenta(tarjetaDeVenta1);
        ventas.registrarVenta(tarjetaDeVenta2);
        let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor, 100, ventas);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion", calculadoraDeSalario);
        let fecha = new Date('5, 10, 2019');
        let boletaDePago = generarBoleta(empleado, fecha);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 630\n");
    });
})