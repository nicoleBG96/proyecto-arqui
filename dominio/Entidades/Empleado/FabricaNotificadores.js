import { Notificador } from '../Empleado/NotificadoresDePago/Notificador';
import { NotificadorEmail } from '../Empleado/NotificadoresDePago/NotificadorEmail';
import { NotificadorFacebook } from '../Empleado/NotificadoresDePago/NotificadorFacebook';
import { NotificadorWhatsapp } from '../Empleado/NotificadoresDePago/NotificadorWhatsapp';

class FabricaDeNotificadores {
    constructor() {

    }

    crearNotificador(tipoNotificador, notificador) {
        switch (tipoNotificador) {
            case "Notificador":
                return new Notificador();
            case "NotificadorEmail":
                return new NotificadorEmail(notificador);
            case "NotificadorFacebook":
                return new NotificadorFacebook(notificador);
            case "NotificadorWhatsapp":
                return new NotificadorWhatsapp(notificador);
        }
    }

    crearNotificadores(empleado) {
        let notificador = this.crearNotificador("Notificador");
        empleado.Notificadores.forEach(tipoNotificador => {
            notificador = this.crearNotificador(tipoNotificador, notificador);
        });
        return notificador;
    }
}

module.exports = { FabricaDeNotificadores };