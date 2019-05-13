import { AsistenciaDiaria} from '../CalculadorasDeMontos/EmpleadoTiempoParcial/AsistenciaDiaria';

describe ("AsistenciaDiaria", function(){
    test("dada la entrada a las 9 al trabajo y la salida a las 12, deberia devolver 3 horas trabajadas", function () {
        let asistenciDiaria = new AsistenciaDiaria("29/01/2019", 9, 12)
        expect(asistenciDiaria.calcularHorasTrabajadas()).toBe(3);
    });
})