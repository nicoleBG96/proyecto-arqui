import { CalculadoraSalarioEmpleadoParcial } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/CalculadoraSalarioEmpleadoParcial'
import { TarjetaDeAsistencias } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/TarjetaDeAsistencias';
import { AsistenciaDiaria } from '..//dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/AsistenciaDiaria';

describe ("CalculadoraSalarioEmpleadoParcial", function(){
    test("dada una calculadora de empleado parcial con un salario por hora de 300, con 8 horas trabajadas, deberia devolver un salario a pagar de 2400", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 8, 16);
        tarjetaDeAsistencias.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario = new CalculadoraSalarioEmpleadoParcial(300, tarjetaDeAsistencias);
        expect(calculadoraDeSalario.calcularSalarioAPagar()).toBe(2400);
    });
})