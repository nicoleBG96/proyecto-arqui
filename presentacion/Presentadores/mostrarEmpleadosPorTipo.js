function obtenerEmpleadosTipo() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(this.responseText);
            construirTablasPorTipo(jsonObj.Respuesta);
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

function seleccionarEmpleadosPorTipo(listaEmpleados, tipo) {
    let empleados = [];
    listaEmpleados.forEach(empleado => {
        if (empleado.Tipo === tipo) {
            empleados.push(empleado);
        }
    });
    return empleados;
}

function registrarAsistencia(codigo) {
    console.log(codigo);
    localStorage.setItem('codigoEmpleado', codigo);
    window.location.href = '/presentacion/Vistas/registrarAsistencia.html';
}

function registrarVenta(codigo) {
    console.log(codigo);
    localStorage.setItem('codigoEmpleado', codigo);
    window.location.href = '/presentacion/Vistas/registrarVenta.html';
}

function crearBoton(nombre, metodo, codigo) {
    return '<button type="button" class="btn btn-default btn-lg" id="myBtn" onclick="' + metodo + '(' + codigo + ')">' + nombre + " </button>";
}

function construirTablaEmpleadosTipoParcial(empleados, nombreTabla) {
    var table = document.createElement("table");
    table.setAttribute('class', 'table table-striped');
    let thead = construirCabecera();
    thead = agregarFila(thead, "Registrar Asistencia");
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
        cell = tr.insertCell(-1);
        cell.innerHTML = crearBoton("Registrar Asistencia", "registrarAsistencia", empleados[i].Ci);
    }
    document.getElementById(nombreTabla).appendChild(table);
}

function construirTablaEmpleadosPorComision(empleados, nombreTabla) {
    var table = document.createElement("table");
    table.setAttribute('class', 'table table-striped');
    let thead = construirCabecera();
    thead = agregarFila(thead, "Registrar Venta");
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
        cell = tr.insertCell(-1);
        cell.innerHTML = crearBoton("Registrar Asistencia", "registrarVenta", empleados[i].Codigo);
    }
    document.getElementById(nombreTabla).appendChild(table);
}

function construirTablasPorTipo(empleados) {
    let empleadosFijo = seleccionarEmpleadosPorTipo(empleados, "Fijo");
    let empleadosParcial = seleccionarEmpleadosPorTipo(empleados, "Parcial");
    let empleadosPorComision = seleccionarEmpleadosPorTipo(empleados, "PorComision");
    construirTabla(empleadosFijo, "empleadosFijo");
    construirTablaEmpleadosTipoParcial(empleadosParcial, "empleadosParcial");
    construirTablaEmpleadosPorComision(empleadosPorComision, "empleadosPorComision");
}

function verTodosLosEmpleados() {
    window.location.href = '/presentacion/Vistas/empleados.html';
}

function crearNuevoEmpleado() {
    window.location.href = '/presentacion/Vistas/registrarEmpleado.html';
}