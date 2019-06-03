class NotificadorWhatsapp{
    constructor(notificador){
        this.notificador = notificador;
        this.mensaje = "Notificacion enviada por Whatsapp";
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

module.exports = { NotificadorWhatsapp };