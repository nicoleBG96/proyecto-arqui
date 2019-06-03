let Notificador = require('../../Empleado/NotificadoresDePago/Notificador').Notificador;
let NotificadorEmail = require('../../Empleado/NotificadoresDePago/NotificadorEmail').NotificadorEmail;
let NotificadorFacebook = require('../../Empleado/NotificadoresDePago/NotificadorFacebook').NotificadorFacebook;
let NotificadorWhatsapp = require('../../Empleado/NotificadoresDePago/NotificadorWhatsapp').NotificadorWhatsapp;

class FabricaNotificadores {
    constructor() {

    }

    crearNotificador(nombreNotificador, notificador) {
        switch (nombreNotificador) {
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
        let nombreNotificadores = Object.keys(empleado.Notificadores);
        nombreNotificadores.forEach(nombreNotificador => {
            notificador = this.crearNotificador(nombreNotificador, notificador);
            notificador.asignarDestinatario(empleado.Notificadores[nombreNotificador]);
        });
        return notificador;
    }
}

module.exports = { FabricaNotificadores };