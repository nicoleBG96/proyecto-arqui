import { GeneradorDeBoletas } from '../dominio/Entidades/Boleta/GeneradoresDeBoletas/GeneradorDeBoletas'
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

describe("GeneradorDeBoletas", function () {
    test("dado el empleado Royer Torrico a la hora de generar su boleta el dia 5/31/2019 que le corresponde, deberia decir que si se puede generar su boleta", function () {
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoFijo(1100, new Date('5, 1, 2019'), new Date('5, 31, 2019'));
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        let fecha = new Date('5, 31, 2019');
        let generadorDeBoletas = new GeneradorDeBoletas();
        expect(generadorDeBoletas.sePuedeGenerarLaBoletaDelEmpleado(empleado, fecha)).toBe(true);
    });

    test("dado el empleado Royer Torrico a la hora de generar su boleta el dia 5/31/2019 que le corresponde, deberia generar su boleta con todos los datos respectivos", function () {
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoFijo(5000, new Date('5, 1, 2019'), new Date('5, 31, 2019'));
        let verificadorFechaDePagoEmpleadoFijo = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador = new NotificadorEmail();
        let metodoDePago = new PagoPorDeposito();
        let empleado = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario, verificadorFechaDePagoEmpleadoFijo, notificador, metodoDePago);
        let fecha = new Date('5, 31, 2019');
        let generadorDeBoletas = new GeneradorDeBoletas();
        expect(generadorDeBoletas.generarUnaBoleta(empleado, fecha)).toEqual({
            "FechaEmision": "5, 31, 2019",
            "NombreEmpleado": "Royer Torrico",
            "CodigoEmpleado": "T-123",
            "CiEmpleado": 8798415,
            "CargoEmpleado": "Champion",
            "SalarioPagado": 5000
        })
    });

    test("dado el empleado Royer Torrico a la hora de generar su boleta el dia 5/31/2019 que le corresponde, deberia generar su boleta con todos los datos respectivos", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        let asistenciaDiaria2 = new AsistenciaDiaria("31/03/2019", 9, 12);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria2);
        let asistenciaDiaria3 = new AsistenciaDiaria("30/03/2019", 9, 13);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria3);
        let calculadoraDeSalario2 = new CalculadoraSalarioEmpleadoParcial(100, tarjetaDeAsistencias);
        let verificadorFechaDePagoEmpleadoFijo2 = new VerificadorFechaDePagoEmpleadoParcial();
        let notificador2 = new NotificadorEmail();
        let metodoDePago2 = new PagoPorDeposito();
        let empleado2 = new Empleado("Laura Meneses", "T-124", 8798416, "Sub Gerente", calculadoraDeSalario2, verificadorFechaDePagoEmpleadoFijo2, notificador2, metodoDePago2);
        let fecha = new Date('5, 31, 2019');
        let generadorDeBoletas = new GeneradorDeBoletas();
        expect(generadorDeBoletas.generarUnaBoleta(empleado2, fecha)).toEqual({
            "FechaEmision": "5, 31, 2019",
            "NombreEmpleado": "Laura Meneses",
            "CodigoEmpleado": "T-124",
            "CiEmpleado": 8798416,
            "CargoEmpleado": "Sub Gerente",
            "SalarioPagado": 1000
        })
    });

    test("dado el empleado Royer Torrico a la hora de generar su boleta el dia 5/31/2019 que le corresponde, deberia generar su boleta con todos los datos respectivos", function () {
        let tarjetaVentas = new TarjetaVentas();
        let venta1 = new Venta("05/03/2019", 300, 50);
        tarjetaVentas.registrarVenta(venta1);
        let venta2 = new Venta("05/03/2019", 400, 50);
        tarjetaVentas.registrarVenta(venta2);
        let venta3 = new Venta("05/03/2019", 600, 50);
        tarjetaVentas.registrarVenta(venta3);
        let fechaInicioTrabajo = new Date('5, 13, 2019');
        let calculadoraDeSalario3 = new CalculadoraSalarioEmpleadoPorComision(100, tarjetaVentas);
        let verificadorFechaDePagoEmpleadoFijo3 = new VerificadorFechaDePagoEmpleadoPorComision(fechaInicioTrabajo);
        let notificador3 = new NotificadorEmail();
        let metodoDePago3 = new PagoPorDeposito();
        let empleado3 = new Empleado("Ronald Escobar", "T-125", 8798417, "Ingeniero", calculadoraDeSalario3, verificadorFechaDePagoEmpleadoFijo3, notificador3, metodoDePago3);
        let fecha = new Date('5, 31, 2019');
        let generadorDeBoletas = new GeneradorDeBoletas();
        expect(generadorDeBoletas.generarUnaBoleta(empleado3, fecha)).toEqual({
            "FechaEmision": "5, 31, 2019",
            "NombreEmpleado": "Ronald Escobar",
            "CodigoEmpleado": "T-125",
            "CiEmpleado": 8798417,
            "CargoEmpleado": "Ingeniero",
            "SalarioPagado": 750
        })
    });

    test("dada una lista de 3 empleados a la hora de generar sus boleta el dia 5/31/2019 que les corresponde, deberia generar sus boletas con todos los datos respectivos", function () {
        let calculadoraDeSalario1 = new CalculadoraSalarioEmpleadoFijo(5000, new Date('5, 1, 2019'), new Date('5, 31, 2019'));
        let verificadorFechaDePagoEmpleadoFijo1 = new VerificadorFechaDePagoEmpleadoFijo();
        let notificador1 = new NotificadorEmail();
        let metodoDePago1 = new PagoPorDeposito();
        let empleado1 = new Empleado("Royer Torrico", "T-123", 8798415, "Champion", calculadoraDeSalario1, verificadorFechaDePagoEmpleadoFijo1, notificador1, metodoDePago1);

        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        let asistenciaDiaria2 = new AsistenciaDiaria("31/03/2019", 9, 12);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria2);
        let asistenciaDiaria3 = new AsistenciaDiaria("30/03/2019", 9, 13);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria3);
        let calculadoraDeSalario2 = new CalculadoraSalarioEmpleadoParcial(100, tarjetaDeAsistencias);
        let verificadorFechaDePagoEmpleadoFijo2 = new VerificadorFechaDePagoEmpleadoParcial();
        let notificador2 = new NotificadorEmail();
        let metodoDePago2 = new PagoPorDeposito();
        let empleado2 = new Empleado("Laura Meneses", "T-124", 8798416, "Sub Gerente", calculadoraDeSalario2, verificadorFechaDePagoEmpleadoFijo2, notificador2, metodoDePago2);

        let tarjetaVentas = new TarjetaVentas();
        let venta1 = new Venta("05/03/2019", 300, 50);
        tarjetaVentas.registrarVenta(venta1);
        let venta2 = new Venta("05/03/2019", 400, 50);
        tarjetaVentas.registrarVenta(venta2);
        let venta3 = new Venta("05/03/2019", 600, 50);
        tarjetaVentas.registrarVenta(venta3);
        let fechaInicioTrabajo = new Date('5, 13, 2019');
        let calculadoraDeSalario3 = new CalculadoraSalarioEmpleadoPorComision(100, tarjetaVentas);
        let verificadorFechaDePagoEmpleadoFijo3 = new VerificadorFechaDePagoEmpleadoPorComision(fechaInicioTrabajo);
        let notificador3 = new NotificadorEmail();
        let metodoDePago3 = new PagoPorDeposito();
        let empleado3 = new Empleado("Ronald Escobar", "T-125", 8798417, "Ingeniero", calculadoraDeSalario3, verificadorFechaDePagoEmpleadoFijo3, notificador3, metodoDePago3);

        let empleados = [];
        empleados.push(empleado1);
        empleados.push(empleado2);
        empleados.push(empleado3);

        let fecha = new Date('5, 31, 2019');
        let generadorDeBoletas = new GeneradorDeBoletas();
        let boletas = generadorDeBoletas.generarVariasBoletas(empleados, fecha);

        expect(boletas[0]).toEqual({
            "FechaEmision": "5, 31, 2019",
            "NombreEmpleado": "Royer Torrico",
            "CodigoEmpleado": "T-123",
            "CiEmpleado": 8798415,
            "CargoEmpleado": "Champion",
            "SalarioPagado": 5000
        });
        expect(boletas[1]).toEqual({
            "FechaEmision": "5, 31, 2019",
            "NombreEmpleado": "Laura Meneses",
            "CodigoEmpleado": "T-124",
            "CiEmpleado": 8798416,
            "CargoEmpleado": "Sub Gerente",
            "SalarioPagado": 1000
        });
        expect(boletas[2]).toEqual({
            "FechaEmision": "5, 31, 2019",
            "NombreEmpleado": "Ronald Escobar",
            "CodigoEmpleado": "T-125",
            "CiEmpleado": 8798417,
            "CargoEmpleado": "Ingeniero",
            "SalarioPagado": 750
        });
    });
})