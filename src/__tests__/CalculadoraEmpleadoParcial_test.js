import {CalculadoraEmpleadoParcial} from '../Calculadoras/CalculadoraDeSalario'
import {ComprobanteFechaDePagoEmpleadoParcial} from '../Comprobantes/ComprobanteFechaDePago'
import { TarjetaDeAsistencia } from '../Parcial/TarjetaDeAsistencia';
import { AsistenciaDiaria } from '../Parcial/AsistenciaDiaria';

describe ("Calculadora Empleado Parcial", function(){
    test("dado un salario por hora de 200, sin horas trabajadas, el sueldo calculado deberia ser 0", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 200, tarjetaDeAsistencia);
        let fecha = new Date('5, 24, 2019');
        expect(calculadoraDeSalario.calcularSalario(fecha)).toBe("Salario Total: 0");
    });

    test("dado un salario por hora de 300, con 8 horas trabajadas, el sueldo calculado deberia ser 2400", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 8, 16);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 300, tarjetaDeAsistencia);
        let fecha = new Date('5, 24, 2019');
        expect(calculadoraDeSalario.calcularSalario(fecha)).toBe("Salario Total: 2400");
    });

})