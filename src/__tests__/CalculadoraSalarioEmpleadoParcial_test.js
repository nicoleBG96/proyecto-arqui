import { CalculadoraSalarioEmpleadoParcial } from '../CalculadorasDeMontos/CalculadoraSalarioEmpleadoParcial'
import { TarjetaDeAsistencias } from '../CalculadorasDeMontos/EmpleadoTiempoParcial/TarjetaDeAsistencias';
import { AsistenciaDiaria } from '../CalculadorasDeMontos/EmpleadoTiempoParcial/AsistenciaDiaria';

describe ("CalculadoraMontosEmpleadoParcial", function(){
    test("dada una calculadora de empleado parcial con un salario por hora de 300, con 8 horas trabajadas, deberia devolver un salario a pagar de 2400", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 8, 16);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoParcial(300, tarjetaDeAsistencias);
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(2400);
    });
})