'use strict';
const nodemailer = require('nodemailer');

class NotificadorEmail {
    constructor(notificador) {
        this.notificador = notificador;
        this.mensaje = "Su boleta de pago ha sido generada exitosamente";
        this.destinatario = null;
    }

    asignarDestinatario(destinatario){
        this.destinatario = destinatario;
    }

    enviarNotificacion() {
        this.notificador.enviarNotificacion();
        nodemailer.createTestAccount((err, account) => {
            let transporter = nodemailer.createTransport({
                host: 'smtp.googlemail.com', // Gmail Host
                port: 465, // Port
                secure: true, // this is true as port is 465
                auth: {
                    user: 'royers.champions@gmail.com', //Gmail username
                    pass: 'royerchampion' // Gmail password
                }
            });

            let mailOptions = {
                from: '"Nicole Barreto" <royers.champions@gmail.com>',
                to: '', // Recepient email address. Multiple emails can send separated by commas
                subject: 'Welcome Email',
                text: ''
            };

            mailOptions.text = this.mensaje;
            mailOptions.to = this.destinatario;

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
            });
        });
    }
}

module.exports = { NotificadorEmail };