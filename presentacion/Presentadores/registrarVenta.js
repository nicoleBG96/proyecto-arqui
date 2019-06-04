function guardarVenta() {
    let codigoEmpleado = localStorage.getItem('codigoEmpleado');
    let fecha = document.getElementById('fecha').value;
    let monto = document.getElementById('monto').value;
    let comision = document.getElementById('comision').value;
    let venta = {
        "CodigoEmpleado": codigoEmpleado,
        "Fecha": fecha,
        "MontoVendido": monto,
        "PorcentajeDeComision": comision
    };

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xmlhttp.open("POST", "http://localhost:3000/venta", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(venta))
}