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

    test("dada la fecha 24/05/2019 deberia devolverme que es viernes", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let fecha = new Date('5, 24, 2019');
        expect(comprobanteFechaDePagoEmpleadoParcial.esFechaDePago(fecha)).toBe(true);
    });

    test("dada la fecha 14/05/2019 deberia devolverme que NO es viernes", function () {
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let fecha = new Date('5, 14, 2019');
        expect(comprobanteFechaDePagoEmpleadoParcial.esFechaDePago(fecha)).toBe(true);
    });
})