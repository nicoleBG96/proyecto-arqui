import { Ventas } from '../Comision/Ventas';
import { TarjetaDeVentas } from '../Comision/TarjetaDeVenta'

describe ("TarjetaDeAsistencia", function(){
    test("dado que no existen ventas registradas, deberia devolver que la comision total es igual a 0", function () {
        let ventas = new Ventas()
        expect(ventas.calcularTotalDeComisiones()).toBe(0);
    });
})