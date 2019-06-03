class NotificadorFacebook {
    constructor(notificador){
        this.notificador = notificador;
        this.mensaje = "Notificacion enviada por Facebook";
        this.destinatario = null;
    }

    asignarDestinatario(destinatario){
        this.destinatario = destinatario;
    }

    enviarNotificacion(){
        this.notificador.enviarNotificacion();
        console.log(this.mensaje);
    }
}

module.exports = { NotificadorFacebook };