function guardarAsistencia() {
    let codigoEmpleado = localStorage.getItem('codigoEmpleado');
    let fecha = document.getElementById('fecha').value;
    let horaInicio = document.getElementById('ingreso').value;
    let horaFinal = document.getElementById('salida').value;
    let asistencia = {
        "CodigoEmpleado": codigoEmpleado,
        "Fecha": fecha,
        "HoraInicio": horaInicio,
        "HoraFinal": horaFinal
    };
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xmlhttp.open("POST", "http://localhost:3000/asistencia", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(asistencia))
}