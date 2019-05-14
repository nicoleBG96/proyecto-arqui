import { VerificadorFechaDePagoEmpleadoPorComision } from '../VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoPorComision';

describe ("VerificadorFechaDePagoEmpleadoParcial", function(){
    test("dado un verificador de fecha de pago de empleado por comision, al recibir la fecha 10/05/2019, deberia devolverme que es el ultimo dia habil del mes", function () {
        let fechaInicio = new Date('5, 4, 2019');
        let verificadorFechaDePago = new VerificadorFechaDePagoEmpleadoPorComision(fechaInicio);
        let fecha = new Date('5, 10, 2019');
        expect(verificadorFechaDePago.esFechaDePago(fecha)).toBe(true);
    });

    test("dado un verificador de fecha de pago de empleado por comision, al recibir la fecha 17/05/2019 deberia devolverme que NO es el ultimo dia habil del mes", function () {
        let fechaInicio = new Date('5, 4, 2019');
        let verificadorFechaDePago = new VerificadorFechaDePagoEmpleadoPorComision(fechaInicio);
        let fecha = new Date('5, 17, 2019');
        expect(verificadorFechaDePago.esFechaDePago(fecha)).toBe(false);
    });

})