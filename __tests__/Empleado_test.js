import { Empleado } from '../dominio/Entidades/Empleado/Empleado';
import { CalculadoraSalarioEmpleadoFijo } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoFijo';
import { CalculadoraSalarioEmpleadoParcial } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoParcial';
import { CalculadoraSalarioEmpleadoPorComision } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoPorComision';
import { VerificadorFechaDePagoEmpleadoFijo } from '../dominio/Entidades/Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoFijo';
import { VerificadorFechaDePagoEmpleadoParcial } from '../dominio/Entidades/Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoParcial';
import { VerificadorFechaDePagoEmpleadoPorComision } from '../dominio/Entidades/Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoPorComision';
import { AsistenciaDiaria } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/AsistenciaDiaria';
import { TarjetaDeAsistencias } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/TarjetaDeAsistencias';
import { Venta } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoComision/Venta';
import { TarjetaVentas } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoComision/TarjetaVentas';
import { NotificadorEmail } from '../dominio/Entidades/Empleado/NotificadoresDePago/NotificadorEmail';
import { PagoPorDeposito } from '../dominio/Entidades/Empleado/MetodoDePago/PagoPorDeposito';

describe("Empleado", function () {
    test("dado un empleado fijo que gana 1100 al calcular su salario deberia devolver 1100", function () {
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoFijo(1100, new Date('5, 1, 2019'), new Date('5, 31, 2019'));
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(1100);
    });

    test("dada un empleado parcial que gana 100 por hora y no tiene horas trabajadadas, al calcular su salario deberia ganar devolver 0", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoParcial(100, tarjetaDeAsistencias);
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
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoParcial(100, tarjetaDeAsistencias);
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
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoParcial(100, tarjetaDeAsistencias);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoParcial();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(1000);
    });

    test("dado un empleado por comision con sueldo basico de 100 y sin ninguna venta registrada, al calcular su salario deberia ganar devolver 100", function () {
        let tarjetaVentas = new TarjetaVentas();
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoPorComision(100, tarjetaVentas);
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
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoPorComision(100, tarjetaVentas);
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
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoPorComision(100, tarjetaVentas);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoPorComision();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        expect(empleado.calcularSalarioAPagar()).toBe(750);
    });
})