let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyectoarqui"
});

export class RepositorioEmpleadoMySql {
    constructor() {
    }

    insertarEmpleado(empleado) {
        return new Promise(function (resolve, reject) {
            con.connect(function (err) {
                if (err) return reject(err);
                var sql = "INSERT INTO empleados (ci,nombre,apellido,tipo) VALUES (" + empleado.ci + ", '" + empleado.nombre + "', '" + empleado.apellido + "', '" + empleado.tipo + "');";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    result.message = 'Empleado insertado satisfactoriamente'
                    resolve(result);
                    con.end();
                });
            });
        })
    }

    recuperarEmpleado(carnet) {
        return new Promise(function (resolve, reject) {
            let empleado;
            con.connect(function (err) {
                if (err) return reject(err);
                let sql = "SELECT * FROM EMPLEADOS WHERE CI=" + carnet;
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    empleado = result[0];
                    resolve(empleado);
                    con.end();
                });
            });
        })
    }

    eliminarEmpleado(carnet) {
        return new Promise(function (resolve, reject) {
            con.connect(function (err) {
                if (err) return reject(err);
                let sql = "DELETE FROM EMPLEADOS WHERE CI=" + carnet;
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    result.message = 'Empleado eliminado satisfactoriamente';
                    resolve(result);
                    con.end();
                });
            });
        })
    }

    modificarEmpleado(carnet, nuevosValores) {
        return new Promise(function (resolve, reject) {
            con.connect(function (err) {
                if (err) return reject(err);
                var sql = "UPDATE empleados SET nombre = '" + nuevosValores.nombre + "', apellido='" + nuevosValores.apellido + "', tipo='" + nuevosValores.tipo +"' WHERE ci=" + carnet;
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    result.message = 'Empleado modificado satisfactoriamente';
                    resolve(result);
                    con.end();
                });
            });
        })
    }
}