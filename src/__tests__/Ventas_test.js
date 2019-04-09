import { Ventas } from '../Comision/Ventas';
import { TarjetaDeVenta } from '../Comision/TarjetaDeVenta'

describe ("TarjetaDeAsistencia", function(){
    test("dado que no existen ventas registradas, deberia devolver que la comision total es igual a 0", function () {
        let ventas = new Ventas()
        expect(ventas.calcularTotalDeComisiones()).toBe(0);
    });

    test("dado que existe 1 venta registradas, deberia devolver que la comision total es igual a 500", function () {
        let ventas = new Ventas();
        let fecha = new Date('5, 10, 2019');
        let tarjetaDeVenta1 = new TarjetaDeVenta(fecha,1000,50);
        ventas.registrarVenta(tarjetaDeVenta1);
        expect(ventas.calcularTotalDeComisiones()).toBe(500);
    });
})