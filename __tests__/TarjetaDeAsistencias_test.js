import { AsistenciaDiaria} from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/AsistenciaDiaria';
import { TarjetaDeAsistencias } from '../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/TarjetaDeAsistencias'

describe ("TarjetaDeAsistencias", function(){
    test("dada una tarjeta de asintencia vacia, deberia devolver 0 horas trabajadas", function () {
        let tarjetaDeAsistencias = new TarjetaDeAsistencias()
        expect(tarjetaDeAsistencias.calcularHorasTrabajadas()).toBe(0);
    });

    test("dada una tarjeta de asintencia con una asistencia diaria de 8:00 a 16:00 deberia devolver 8 horas trabajadas en total", function () {
        let asitenciaDiaria = new AsistenciaDiaria("29/01/2019", 8, 16)
        let tarjetaDeAsistencias = new TarjetaDeAsistencias()
        tarjetaDeAsistencias.registrarAsistencia(asitenciaDiaria);
        expect(tarjetaDeAsistencias.calcularHorasTrabajadas()).toBe(8);
    });

    test("dado una tarjeta de asistencia con 2 asintencias diarias de 8:00 a 16:00 deberia devolver 8 horas trabajadas en total", function () {
        let asitenciaDiaria1 = new AsistenciaDiaria("29/01/2019", 8, 16)
        let tarjetaDeAsistencias = new TarjetaDeAsistencias()
        tarjetaDeAsistencias.registrarAsistencia(asitenciaDiaria1);
        let asitenciaDiaria2 = new AsistenciaDiaria("29/01/2019", 8, 16)
        tarjetaDeAsistencias.registrarAsistencia(asitenciaDiaria2);
        expect(tarjetaDeAsistencias.calcularHorasTrabajadas()).toBe(16);
    });
})