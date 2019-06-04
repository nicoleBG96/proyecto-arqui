function generarBoletas() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(this.responseText);
            construirTabla(jsonObj.Respuesta, "boletas");
        }
    };
    xmlhttp.open("GET", "http://127.0.0.1:3000/boleta", true);
    xmlhttp.send();
}

function agregarFila(thead, nombreFila) {
    var th = document.createElement("th");
    th.innerHTML = nombreFila;
    th.setAttribute('class', 'scope');
    thead.appendChild(th);
    return thead;
}

function construirCabecera() {
    var thead = document.createElement("thead")
    thead = agregarFila(thead, "Fecha Emision");
    thead = agregarFila(thead, "Nombre Empleado");
    thead = agregarFila(thead, "Codigo Empleado");
    thead = agregarFila(thead, "Ci Empleado");
    thead = agregarFila(thead, "Cargo Empleado");
    thead = agregarFila(thead, "Salario Pagado");
    return thead;
}

function construirTabla(empleados, nombreTabla) {
    var table = document.createElement("table");
    table.setAttribute('class', 'table table-striped');
    let thead = construirCabecera();
    table.appendChild(thead)
    for (var i = 0; i < empleados.length; i++) {
        tr = table.insertRow(-1);
        var cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].FechaEmision;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].NombreEmpleado;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].CodigoEmpleado;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].CiEmpleado;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].CargoEmpleado;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].SalarioPagado;
    }
    document.getElementById(nombreTabla).appendChild(table);
}
