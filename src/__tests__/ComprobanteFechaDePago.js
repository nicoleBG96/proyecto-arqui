import {ComprobanteFechaDePagoEmpleadoFijo, ComprobanteFechaDePagoEmpleadoParcial, ComprobanteFechaDePagoVendedor} from '../Comprobantes/ComprobanteFechaDePago';

describe ("ComprobanteFechaDePago", function(){
    test("dada la fecha 31/05/2019 deberia devolverme que es el ultimo dia habil del mes", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let fecha = new Date('5, 31, 2019');
        expect(comprobanteFechaDePagoEmpleadoFijo.esFechaDePago(fecha)).toBe(true);
    });

    test("dada la fecha 30/05/2019 deberia devolverme que NO es el ultimo dia habil del mes", function () {
        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let fecha = new Date('5, 30, 2019');
        expect(comprobanteFechaDePagoEmpleadoFijo.esFechaDePago(fecha)).toBe(false);
    });
})