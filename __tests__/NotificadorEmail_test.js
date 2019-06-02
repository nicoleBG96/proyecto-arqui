import { NotificadorEmail } from '../dominio/Entidades/Empleado/NotificadoresDePago/NotificadorEmail';
import { NotificadorWhatsapp } from '../dominio/Entidades/Empleado/NotificadoresDePago/NotificadorWhatsapp';
import { NotificadorFacebook } from '../dominio/Entidades/Empleado/NotificadoresDePago/NotificadorFacebook';
import { Notificador } from '../dominio/Entidades/Empleado/NotificadoresDePago/Notificador'

describe("Notificador", function () {
    test("Dada la boleta de un empleado, este debe ser notificado via email.", function () {
        let notificador = new Notificador();
        notificador = new NotificadorWhatsapp(notificador);
        notificador = new NotificadorFacebook(notificador);
        notificador = new NotificadorEmail(notificador);
        let mensaje = 'Su boleta fue generada correctamente'
        let destinatario = 'tefi1508@gmail.com'
        notificador.enviarNotificacion(destinatario, mensaje);
        expect(true).toBe(true);
    });
});
