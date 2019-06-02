import { VerificadorFechaDePagoEmpleadoParcial } from '../dominio/Entidades/Empleado/VerificadoresFechaDePago/VerificadorFechaDePagoEmpleadoParcial';

describe ("VerificadorFechaDePagoEmpleadoParcial", function(){
    test("dado un verificador de fecha de pago de empleado parcial, al recibir la fecha 10/05/2019, deberia devolverme que es el ultimo dia habil del mes", function () {
        let verificadorFechaDePago = new VerificadorFechaDePagoEmpleadoParcial();
        let fecha = new Date('5, 10, 2019');
        expect(verificadorFechaDePago.esFechaDePago(fecha)).toBe(true);
    });

    test("dado un verificador de fecha de pago de empleado parcial, al recibir la fecha 12/05/2019 deberia devolverme que NO es el ultimo dia habil del mes", function () {
        let verificadorFechaDePago = new VerificadorFechaDePagoEmpleadoParcial();
        let fecha = new Date('5, 12, 2019');
        expect(verificadorFechaDePago.esFechaDePago(fecha)).toBe(false);
    });

})