function registrar(){
    let Nombre = document.getElementById("Nombre").value;
    let Codigo = document.getElementById("Codigo").value;
    let Ci = document.getElementById("Ci").value;
    let FechaInicio = document.getElementById("FechaInicio").value;
    let Tipo = document.getElementById("Tipo").value;
    let Cargo = document.getElementById("Cargo").value;
    let MetodoDePago = document.getElementById("MetodoDePago").value;
    let Salario = document.getElementById("Salario").value;
    let Sindicato = document.getElementById("Sindicato").value;
    let NotificadorEmail = recuperarNotificadorEmail();
    let NotificadorWhatsapp = recuperarNotificadorWhatsapp();
    let NotificadorFacebook = recuperarNotificadorFacebook();
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            console.log(this.responseText);
            window.location.href='/main.html';
        }
    };
    xmlhttp.open("POST", "http://127.0.0.1:3000/empleado/", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({
        "Nombre" : Nombre,
        "Codigo" : Codigo,
        "Ci" : Ci,
        "FechaInicio" : FechaInicio,
        "Tipo" : Tipo,
        "Cargo" : Cargo,
        "MetodoDePago" : MetodoDePago,
        "Salario" : Salario,
        "NotificadorEmail": NotificadorEmail,
        "NotificadorWhatsapp": NotificadorWhatsapp,
        "NotificadorFacebook": NotificadorFacebook,
        "Sindicato" : Sindicato
    }))
}

function cambiarTipoDeSalario(){
    let tipoDeEmpleado = document.getElementById("Tipo").value;
    labelSalario = document.getElementById("labelSalario");
    let tipoDeSalario = labelSalario.innerText;
    if(tipoDeEmpleado === "Empleado Fijo"){
        labelSalario.innerText = "Salario Fijo";
    }
    if(tipoDeEmpleado === "Empleado Parcial"){
        labelSalario.innerText = "Salario por hora";
    }
    if(tipoDeEmpleado === "Empleado por comision"){
        labelSalario.innerText = "Salario Basico";
    }
}

function seleccionarNotificadores(){
    let email = document.getElementById("email");
    let whatsapp = document.getElementById("whatsapp");
    let facebook = document.getElementById("facebook");
    let notificadorEmail = document.getElementById("NotificadorEmail");
    let notificadorWhatsapp = document.getElementById("NotificadorWhatsapp");
    let notificadorFacebook = document.getElementById("NotificadorFacebook");
    if(email.checked === true){
        notificadorEmail.disabled = false;
    }
    else {
        notificadorEmail.disabled = true;
    }
    if(whatsapp.checked === true){
        notificadorWhatsapp.disabled = false;
    }
    else {
        notificadorWhatsapp.disabled = true;
    }
    if(facebook.checked === true){
        notificadorFacebook.disabled = false;
    }
    else {
        notificadorFacebook.disabled = true;
    }
}

function recuperarNotificadorEmail(){
    let notificadorEmail = document.getElementById("NotificadorEmail");
    if(notificadorEmail.disabled === false){
        return notificadorEmail.value;
    } else {
        return "vacio";
    }
}

function recuperarNotificadorWhatsapp(){
    let notificadorWhatsapp = document.getElementById("NotificadorWhatsapp");
    if(notificadorWhatsapp.disabled === false){
        return notificadorWhatsApp.value;
    } else {
        return "vacio";
    }
}

function recuperarNotificadorEmail(){
    let notificadorFacebook = document.getElementById("NotificadorFacebook");
    if(notificadorFacebook.disabled === false){
        return notificadorFacebook.value;
    } else {
        return "vacio";
    }
}

seleccionarNotificadores();