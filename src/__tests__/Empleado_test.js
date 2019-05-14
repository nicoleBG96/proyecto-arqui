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

describe("Empleado", function () {
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

    test("dada un empleado parcial que gana 100 por hora y no tiene horas trabajadadas, al calcular su salario deberia ganar devolver 0", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(100, tarjetaDeAsistencias);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoParcial();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(0);
    });

    test("dada un empleado parcial que gana 100 por hora y tiene 3 horas trabajadadas, al calcular su salario deberia ganar devolver 300", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(100, tarjetaDeAsistencias);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoParcial();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(300);
    });

    test("dada un empleado parcial que gana 100 por hora y tiene 10 horas trabajadadas, al calcular su salario deberia ganar devolver 1000", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        let asistenciaDiaria2 = new AsistenciaDiaria("31/03/2019", 9, 12);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria2);
        let asistenciaDiaria3 = new AsistenciaDiaria("30/03/2019", 9, 13);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria3);
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(100, tarjetaDeAsistencias);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoParcial();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(1000);
    });

    test("dado un empleado por comision con sueldo basico de 100 y sin ninguna venta registrada, al calcular su salario deberia ganar devolver 100", function () {
        let tarjetaVentas = new TarjetaVentas();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(100, tarjetaVentas);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoPorComision();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(100);
    });

    test("dado un empleado por comision con sueldo basico de 100 y con ventas de 1000 registradas al 50% de comision, al calcular su salario deberia ganar devolver 600", function () {
        let tarjetaVentas = new TarjetaVentas();
        let venta = new Venta("05/03/2019",1000, 50);
        tarjetaVentas.registrarVenta(venta);
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(100, tarjetaVentas);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoPorComision();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(600);
    });

    test("dado un empleado por comision con sueldo basico de 100 y con ventas de 1300 registradas al 50% de comision, al calcular su salario deberia ganar devolver 750", function () {
        let tarjetaVentas = new TarjetaVentas();
        let venta1 = new Venta("05/03/2019", 300, 50);
        tarjetaVentas.registrarVenta(venta1);
        let venta2 = new Venta("05/03/2019", 400, 50);
        tarjetaVentas.registrarVenta(venta2);
        let venta3 = new Venta("05/03/2019", 600, 50);
        tarjetaVentas.registrarVenta(venta3);
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(100, tarjetaVentas);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoPorComision();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(750);
    });
})