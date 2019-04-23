let MongoClient = require('mongodb').MongoClient;

export class BaseDeDatosMongo {
    constructor() {
        this.nombre = "arquiproyecto";
        this.url = "mongodb://localhost:27017/";
    }

    crearConjuntoDeEmpleados() {
        let self = this;
        MongoClient.connect(self.url, function (err, db) {
            let dbo = db.db(self.nombre);
            dbo.createCollection("empleados", function (err, res) {
                if (err) throw err;
                db.close();
            });
        });
    }

    insertarEmpleado(empleado) {
        let self = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
                let dbo = db.db(self.nombre);
                dbo.collection("empleados").insertOne(empleado, function (err, res) {
                    if (err) throw err;
                    res.message = 'Empleado insertado satisfactoriamente'
                    resolve(res);
                    db.close();
                });
            });
        })
    }

    recuperarEmpleado(carnet) {
        let self = this;
        return new Promise(function (resolve, reject) {
            let empleado;
            MongoClient.connect(self.url, function (err, db) {
                if (err) throw err;
                let dbo = db.db(self.nombre);
                let query = { ci: carnet };
                dbo.collection("empleados").find(query).toArray(function (err, result) {
                    if (err) throw err;
                    empleado = result[0];
                    resolve(empleado);
                    db.close();
                });
            });
        })
    }

    eliminarEmpleado(carnet) {
        let self = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(self.url, function (err, db) {
                if (err) throw err;
                let dbo = db.db(self.nombre);
                let query = { ci: carnet };
                dbo.collection("empleados").deleteOne(query, function (err, obj) {
                    obj.message = 'Empleado eliminado satisfactoriamente';
                    resolve(obj);
                    db.close();
                });
            });
        })
    }

    modificarEmpleado(carnet, nuevosValores) {
        return new Promise(function (resolve, reject) {
            let self = this;
            MongoClient.connect(self.url, function (err, db) {
                if (err) throw err;
                let dbo = db.db(self.nombre);
                let query = { ci: carnet };
                dbo.collection("empleados").updateOne(query, nuevosValores, function (err, res) {
                    if (err) throw err;
                    res.message = 'Empleado modificado satisfactoriamente';
                    resolve(res);
                    db.close();
                });
            });
        })
    }
}


