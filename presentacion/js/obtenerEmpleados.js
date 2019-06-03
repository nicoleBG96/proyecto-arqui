function obtenerEmpleados() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(this.responseText);
            populateTable(jsonObj.objects);
        }
    };
    xmlhttp.open("GET", "http://127.0.0.1:3000/empleado/", true);
    xmlhttp.send();
}

function llenarTabla(jsonObj) {
    var col = [];
    for (let index = 0; index < jsonObj.length - 1; index++) {
        for (var key in jsonObj[index]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table");
    table.setAttribute('class', 'table table-striped');

    var thead = document.createElement("thead")

    for (var i = 0; i < col.length - 3; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        th.setAttribute('class', 'scope');
        thead.appendChild(th);
    }

    var th = document.createElement("th");
    th.innerHTML = "Editar"
    th.setAttribute('class', 'scope');
    thead.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Eliminar"
    th.setAttribute('class', 'scope');
    thead.appendChild(th);

    table.appendChild(thead)

    for (var i = 0; i < jsonObj.length; i++) {
        tr = table.insertRow(-1);
        var id;
        for (var j = 0; j < col.length - 3; j++) {
            var cell = tr.insertCell(-1);
            cell.innerHTML = jsonObj[i][col[j]];
            if (j == 4) {
                id = jsonObj[i][col[j]];
            }
        }
        var cell = tr.insertCell(-1);
        cell.innerHTML = '<button class="btn btn-success" onclick="putPlanet('+ id +')">Editar</button>'
        cell = tr.insertCell(-1);
        cell.innerHTML = '<button class="btn btn-danger" onclick="deletePlanet(' + id + ')">Eliminar' + id + '</button>'
    }
    document.getElementById("empleados").appendChild(table);
}

