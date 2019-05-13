import { Venta } from '../CalculadorasDeMontos/EmpleadoComision/Venta';

describe ("Venta", function(){
    test("dada una venta de 1000 con una comision del 30%, deberia devolver una total de comision de 300", function () {
        let fecha = new Date('5, 10, 2019');
        let venta = new Venta(fecha,1000,30);
        expect(venta.calcularComisionDeVenta()).toBe(300);
    });
})