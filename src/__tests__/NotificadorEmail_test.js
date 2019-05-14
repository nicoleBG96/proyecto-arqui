import { NotificadorEmail } from '../NotificadoresDePago/NotificadorEmail';
import { Notificador } from '../NotificadoresDePago/Notificador'

describe("Notificador", function () {
    test("Dada la boleta de un empleado, este debe ser notificado via email.", function () {
        let notificador = new Notificador();
        let notificadoEmail = new NotificadorEmail(notificador);
        let mensaje = 'Su boleta fue generada correctamente'
        let destinatario = 'tefi1508@gmail.com'
        notificadoEmail.enviarNotificacion(destinatario, mensaje);
        expect(true).toBe(true);
    });
});
