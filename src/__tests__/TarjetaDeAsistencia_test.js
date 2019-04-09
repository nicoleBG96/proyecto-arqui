import { AsistenciaDiaria } from '../Parcial/AsistenciaDiaria';
import { TarjetaDeAsistencia } from '../Parcial/TarjetaDeAsistencia'

describe ("TarjetaDeAsistencia", function(){
    test("dado que no hay tarjeta de asintencia, deberia devolver 0 horas trabajadas", function () {
        let tarjetaDeAsistencia = new TarjetaDeAsistencia()
        expect(tarjetaDeAsistencia.calcularHorasTrabajadas()).toBe(0);
    });
})