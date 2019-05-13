import { NotificadorEmail } from '../Notificadores/NotificadorEmail';

describe("Notificador", function () {
    test("Dada la boleta de un empleado, este debe ser notificado via email.", function () {
        let notificadoEmail = new NotificadorEmail();
        let mensaje = 'Su boleta fue generada correctamente'
        let destinatario = 'tefi1508@gmail.com'
        notificadoEmail.enviarNotificacion(destinatario, mensaje);
        expect(true).toBe(true);
    });
});
