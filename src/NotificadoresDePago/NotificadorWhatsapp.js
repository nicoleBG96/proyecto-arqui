class NotificadorWhatsapp{
    constructor(notificador){
        this.notificador = notificador;
    }

    enviarNotificacion(destinatario, mensaje){
        this.notificador.enviarNotificacion(destinatario, mensaje);
        console.log("Notificacion enviada por Whatsapp");
    }
}