let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyectoarqui"
});

export class BaseDeDatosMySql {
    constructor(nombre) {
        this.nombre = nombre;
    }

    crearConjuntoDeEmpleados() {
        con.connect(function (err) {
            if (err) throw err;
            var sql = "CREATE TABLE `empleados` (`empleado_id` INT(11) NOT NULL AUTO_INCREMENT,`ci` INT(11),`nombre` VARCHAR(50) NOT NULL,`apellido` VARCHAR(50) NOT NULL,`cargo` VARCHAR(50) NOT NULL,PRIMARY KEY (`empleado_id`))";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Table created");
            });
        });
    }

    insertarEmpleado(objeto) {
        con.connect(function (err) {
            if (err) throw err;
            console.log(objeto);
            var sql = "INSERT INTO empleados (ci,nombre,apellido,tipo) VALUES (" + objeto.ci + ", '" + objeto.nombre + "', '" + objeto.apellido + "', '" + objeto.tipo + "');";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
                con.end();
            });
        });
    }

    recuperarEmpleado(carnet) {
        let empleado;
        con.connect(function (err) {
            if (err) throw err;
            let sql = "SELECT * FROM EMPLEADOS WHERE CI=" + carnet;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                empleado = result;
                con.end();
            });
        });
        return empleado;
    }

    eliminarEmpleado(carnet) {
        con.connect(function (err) {
            if (err) throw err;
            let sql = "DELETE FROM EMPLEADOS WHERE CI=" + carnet;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                con.end();
            });
        });
    }

    modificarEmpleado(carnet, nuevosValores) {
        con.connect(function (err) {
            if (err) throw err;
            var sql = "UPDATE empleados SET nombre = '" + nuevosValores.nombre + "' and apellido='" + nuevosValores.apellido + "' and apellido='" + nuevosValores.tipo + "' WHERE ci=" + carnet;
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
            });
        });
    }
}