function obtenerEmpleados() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(this.responseText);
            construirTabla(jsonObj.Respuesta, "empleados");
        }
    };
    xmlhttp.open("GET", "http://127.0.0.1:3000/empleado/", true);
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
    thead = agregarFila(thead, "Nombre");
    thead = agregarFila(thead, "Codigo");
    thead = agregarFila(thead, "Ci");
    thead = agregarFila(thead, "Cargo");
    thead = agregarFila(thead, "Tipo");
    thead = agregarFila(thead, "Metodo de pago");
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
        cell.innerHTML = empleados[i].Nombre;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].Codigo;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].Ci;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].Cargo;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].Tipo;
        cell = tr.insertCell(-1);
        cell.innerHTML = empleados[i].MetodoDePago;
    }
    document.getElementById(nombreTabla).appendChild(table);
}

function verEmpleadosPorTipo() {
    window.location.href = '/presentacion/Vistas/empleadosPorTipo.html';
}

function crearNuevoEmpleado() {
    window.location.href = '/presentacion/Vistas/registrarEmpleado.html';
}