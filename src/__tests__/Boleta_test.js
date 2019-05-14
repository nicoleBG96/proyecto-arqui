import { Boleta } from '../Entidades/Boleta';
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

describe("Boleta", function () {
    test("dada la boleta de pago de un empleado fijo deberia devolver los datos de la boleta respectivos", function () {
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoFijo(1100, 10, 10);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        let boleta = new Boleta(empleado, new Date());
        let datosBoleta = boleta.obtenerDatosDeBoleta();
        expect(datosBoleta.salarioBasico).toBe(1100);
        expect(datosBoleta.descuentoPorcentaje).toBe(10);
        expect(datosBoleta.descuentoTotal).toBe(110);
        expect(datosBoleta.aportesPorcentaje).toBe(10);
        expect(datosBoleta.aportesTotales).toBe(110);
        expect(datosBoleta.salarioAPagar).toBe(880);
    });

    test("dada la boleta de pago de un empleado parcial deberia devolver los datos de la boleta respectivos", function () {
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
        let boleta = new Boleta(empleado, new Date());
        let datosBoleta = boleta.obtenerDatosDeBoleta();
        expect(datosBoleta.salarioBasico).toBe(1000);
        expect(datosBoleta.descuentoPorcentaje).toBe(0);
        expect(datosBoleta.descuentoTotal).toBe(0);
        expect(datosBoleta.aportesPorcentaje).toBe(0);
        expect(datosBoleta.aportesTotales).toBe(0);
        expect(datosBoleta.salarioAPagar).toBe(1000);
    });

    test("dada la boleta de pago de un empleado por comision deberia devolver los datos de la boleta respectivos", function () {
        let tarjetaVentas = new TarjetaVentas();
        let venta = new Venta("05/03/2019",1000, 50);
        tarjetaVentas.registrarVenta(venta);
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoPorComision(100, tarjetaVentas);
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoPorComision();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        let boleta = new Boleta(empleado, new Date());
        let datosBoleta = boleta.obtenerDatosDeBoleta();
        expect(datosBoleta.salarioBasico).toBe(600);
        expect(datosBoleta.descuentoPorcentaje).toBe(0);
        expect(datosBoleta.descuentoTotal).toBe(0);
        expect(datosBoleta.aportesPorcentaje).toBe(0);
        expect(datosBoleta.aportesTotales).toBe(0);
        expect(datosBoleta.salarioAPagar).toBe(600);
    });
})