import { Empleado } from '../Entidades/Empleado';
import { CalculadoraMontosEmpleadoFijo } from '../CalculadorasDeMontos/CalculadoraMontosEmpleadoFijo';
import { CalculadoraMontosEmpleadoParcial } from '../CalculadorasDeMontos/CalculadoraMontosEmpleadoParcial';
import { CalculadoraMontosEmpleadoPorComision } from '../CalculadorasDeMontos/CalculadoraMontosEmpleadoPorComision';
import { VerificadorFechaDePagoEmpleadoFijo } from '../VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoFijo';
import { VerificadorFechaDePagoEmpleadoParcial } from '../VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoParcial';
import { VerificadorFechaDePagoEmpleadoPorComision } from '../VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoPorComision';
import { AsistenciaDiaria } from '../CalculadorasDeMontos/EmpleadoTiempoParcial/AsistenciaDiaria';
import { TarjetaDeAsistencias } from '../CalculadorasDeMontos/EmpleadoTiempoParcial/TarjetaDeAsistencias';
import { Venta } from '../CalculadorasDeMontos/EmpleadoComision/Venta';
import { TarjetaVentas } from '../CalculadorasDeMontos/EmpleadoComision/TarjetaVentas';
import { NotificadorEmail } from '../NotificadoresDePago/NotificadorEmail';
import { PagoPorDeposito } from '../MetodoDePago/PagoPorDeposito';

describe ("Empleado", function(){
    test("dado un empleado fijo que gana 1100 al calcular su salario deberia devolver 1100", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(1100, 0, 0);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(1100);
    });

    test("dado un empleado fijo que gana 1100 al cual se le descuenta un 10% al calcular su salario a pagar deberia devolver 990", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(1100, 10, 0);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(990);
    });

    test("dado un empleado fijo que gana 1100 al cual se le descuente un 10% y el cual aporta 20% al calcular su salario deberia devolver 770", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(1100, 10, 20);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(770);
    });

    // test("dada un empleado parcial que gana 100 por hora y no tiene horas trabajadadas, deberia ganar 0", function () {
    //     let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
    //     let tarjetaDeAsistencia = new TarjetaDeAsistencia();
    //     let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
    //     let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
    //     let fecha = new Date('5, 24, 2019');
    //     expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 0");
    // });

    // test("dada un empleado parcial que gana 100 por hora y tiene 3 horas trabajadadas, deberia ganar 300", function () {
    //     let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
    //     let tarjetaDeAsistencia = new TarjetaDeAsistencia();
    //     let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
    //     tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria);
    //     let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
    //     let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
    //     let fecha = new Date('5, 24, 2019');
    //     expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 300");
    // });

    // test("dada un empleado parcial que gana 100 por hora y tiene 10 horas trabajadadas, deberia ganar 1000", function () {
    //     let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
    //     let tarjetaDeAsistencia = new TarjetaDeAsistencia();
    //     let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
    //     tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria);
    //     let asistenciaDiaria2 = new AsistenciaDiaria("31/03/2019", 9, 12);
    //     tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria2);
    //     let asistenciaDiaria3 = new AsistenciaDiaria("30/03/2019", 9, 13);
    //     tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria3);
    //     let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
    //     let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
    //     let fecha = new Date('5, 24, 2019');
    //     expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 1000");
    // });

    // test("dado un empleado vendedor con sueldo basico de 100 y sin ninguna venta registrada, deberia ganar 100", function () {
    //     let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
    //     let ventas = new Ventas();
    //     let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor, 100, ventas);
    //     let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
    //     let fecha = new Date('5, 24, 2019');
    //     expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 100");
    // });

    // test("dado un empleado vendedor con sueldo basico de 100 y con ventas de 1000 registradas al 50% de comision, deberia ganar 600", function () {
    //     let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
    //     let ventas = new Ventas();
    //     let tarjetaDeVenta1 = new TarjetaDeVenta("05/03/2019",1000, 50);
    //     ventas.registrarVenta(tarjetaDeVenta1);
    //     let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor,100, ventas);
    //     let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
    //     let fecha = new Date('5, 24, 2019');
    //     expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 600");
    // });

    // test("dado un empleado vendedor con sueldo basico de 100 y con ventas de 1300 registradas al 50% de comision, deberia ganar 750", function () {
    //     let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
    //     let ventas = new Ventas();
    //     let tarjetaDeVenta1 = new TarjetaDeVenta("05/03/2019",1000, 50);
    //     let tarjetaDeVenta2 = new TarjetaDeVenta("20/04/2019", 300, 50);
    //     ventas.registrarVenta(tarjetaDeVenta1);
    //     ventas.registrarVenta(tarjetaDeVenta2);
    //     let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor,100, ventas);
    //     let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
    //     let fecha = new Date('5, 24, 2019');
    //     expect(empleado.calcularSalarioAPagar(fecha)).toBe("Salario Total: 750");
    // });
})