import { AsistenciaDiaria } from '../Parcial/AsistenciaDiaria';
import { TarjetaDeAsistencia } from '../Parcial/TarjetaDeAsistencia'

describe ("TarjetaDeAsistencia", function(){
    test("dado que no hay tarjeta de asintencia, deberia devolver 0 horas trabajadas", function () {
        let tarjetaDeAsistencia = new TarjetaDeAsistencia()
        expect(tarjetaDeAsistencia.calcularHorasTrabajadas()).toBe(0);
    });

    test("dado que hay una tarjeta de asintencia de 8 a 16 deberia devolver 8 horas trabajadas en total", function () {
        let asitenciaDiaria = new AsistenciaDiaria("29/01/2019", 8, 16)
        let tarjetaDeAsistencia = new TarjetaDeAsistencia()
        tarjetaDeAsistencia.registrarAsistencia(asitenciaDiaria);
        expect(tarjetaDeAsistencia.calcularHorasTrabajadas()).toBe(8);
    });

    
})