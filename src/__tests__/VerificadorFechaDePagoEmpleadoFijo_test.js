import { VerificadorFechaDePagoEmpleadoFijo } from '../VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoFijo';

describe ("VerificadorFechaDePagoEmpleadoFijo", function(){
    test("dado un verificador de fecha de pago de empleado fijo, al recibir la fecha 31/05/2019, deberia devolverme que es el ultimo dia habil del mes", function () {
        let verificadorFechaDePago = new VerificadorFechaDePagoEmpleadoFijo();
        let fecha = new Date('5, 31, 2019');
        expect(verificadorFechaDePago.esFechaDePago(fecha)).toBe(true);
    });

    test("dado un verificador de fecha de pago de empleado fijo, al recibir la fecha 30/05/2019 deberia devolverme que NO es el ultimo dia habil del mes", function () {
        let verificadorFechaDePago = new VerificadorFechaDePagoEmpleadoFijo();
        let fecha = new Date('5, 30, 2019');
        expect(verificadorFechaDePago.esFechaDePago(fecha)).toBe(false);
    });

})