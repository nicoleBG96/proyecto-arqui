import { CalculadoraMontosEmpleadoParcial } from '../CalculadorasDeMontos/CalculadoraMontosEmpleadoParcial'
import { TarjetaDeAsistencias } from '../CalculadorasDeMontos/EmpleadoTiempoParcial/TarjetaDeAsistencias';
import { AsistenciaDiaria } from '../CalculadorasDeMontos/EmpleadoTiempoParcial/AsistenciaDiaria';

describe ("CalculadoraMontosEmpleadoParcial", function(){
    test("dada una calculadora de empleado parcial con un salario por hora de 200, sin horas trabajadas, deberia devolver un salario basico de 0", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(200, tarjetaDeAsistencias);
        expect(calculadoraDeSalario.calcularSalarioBasico()).toBe(0);
    });

    test("dada una calculadora de empleado parcial con un salario por hora de 300, con 8 horas trabajadas, deberia devolver un salario a pagar de 2400", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 8, 16);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(300, tarjetaDeAsistencias);
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(2400);
    });

    test("dada una calculadora de empleado parcial, deberia devolver un porcentaje de descuesto del 0%", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(300, tarjetaDeAsistencias);
        expect(calculadoraDeSalario.obtenerPorcentajeDescuento()).toBe(0);
    });

    test("dada una calculadora de empleado parcial, deberia devolver un descuesto total de 0.0", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(300, tarjetaDeAsistencias);
        expect(calculadoraDeSalario.calcularDescuentoTotal()).toBe(0.0);
    });

    test("dada una calculadora de empleado parcial, deberia devolver un porcentaje de aportes del 0%", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(300, tarjetaDeAsistencias);
        expect(calculadoraDeSalario.obtenerPorcentajeAportes()).toBe(0);
    });

    test("dada una calculadora de empleado parcial, deberia devolver un aporte total de 0.0", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let calculadoraDeSalario = new CalculadoraMontosEmpleadoParcial(300, tarjetaDeAsistencias);
        expect(calculadoraDeSalario.calcularAportesTotales()).toBe(0.0);
    });

})