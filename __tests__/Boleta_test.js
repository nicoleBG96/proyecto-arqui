import { Boleta } from '../dominio/Entidades/Boleta/Boleta';
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

describe("Boleta", function () {
    test("dada la boleta de pago de un empleado fijo deberia devolver los datos de la boleta respectivos", function () {
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoFijo(1100, new Date());
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        let boleta = new Boleta(empleado, new Date());
        let datosBoleta = boleta.obtenerDatosDeBoleta();
        expect(datosBoleta.salarioAPagar).toBe(1100);
    });

    test("dada la boleta de pago de un empleado parcial deberia devolver los datos de la boleta respectivos", function () {
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
        let boleta = new Boleta(empleado, new Date());
        let datosBoleta = boleta.obtenerDatosDeBoleta();
        expect(datosBoleta.salarioAPagar).toBe(1000);
    });

    test("dada la boleta de pago de un empleado por comision deberia devolver los datos de la boleta respectivos", function () {
        let tarjetaVentas = new TarjetaVentas();
        let venta = new Venta("05/03/2019",1000, 50);
        tarjetaVentas.registrarVenta(venta);
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoPorComision(100, tarjetaVentas);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoPorComision();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        let boleta = new Boleta(empleado, new Date());
        let datosBoleta = boleta.obtenerDatosDeBoleta();
        expect(datosBoleta.salarioAPagar).toBe(600);
    });
})