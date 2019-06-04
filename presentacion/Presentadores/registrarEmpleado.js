function registrarEmpleado() {
    let Nombre = document.getElementById("nombre").value;
    let Codigo = document.getElementById("codigo").value;
    let Ci = document.getElementById("ci").value;
    let FechaInicio = document.getElementById("fecha").value;
    let Tipo = document.getElementById("tipo").value;
    let Cargo = document.getElementById("cargo").value;
    let MetodoDePago = document.getElementById("metodoDePago").value;
    let Salario = document.getElementById("salario").value;
    let Sindicato = document.getElementById("sindicato").value;
    let NotificadorEmail = document.getElementById("correo").value;
    let NotificadorWhatsapp = document.getElementById("telefono").value;
    let NotificadorFacebook = document.getElementById("facebook").value;

    let empleado = {
        "Nombre": Nombre,
        "Codigo": Codigo,
        "Ci": Ci,
        "FechaInicio": FechaInicio,
        "Tipo": Tipo,
        "Cargo": Cargo,
        "MetodoDePago": MetodoDePago,
        "Salario": Salario,
        "Notificadores": {
            "NotificadorEmail": NotificadorEmail,
            "NotificadorWhatsapp": NotificadorWhatsapp,
            "NotificadorFacebook": NotificadorFacebook,
        },
        "Sindicato": Sindicato
    }
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xmlhttp.open("POST", "http://localhost:3000/empleado", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(empleado))
}
