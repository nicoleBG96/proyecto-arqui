let MongoClient = require('mongodb').MongoClient;

export class BaseDeDatosMongo {
    constructor(nombre) {
        this.nombre = nombre;
        this.url = "mongodb://localhost:27017/";
    }

    crearConjuntoDeDatos(nombreConjunto) {
        let self = this;
        MongoClient.connect(self.url, function (err, db) {
            let dbo = db.db(self.nombre);
            dbo.createCollection(nombreConjunto, function (err, res) {
                if (err) throw err;
                db.close();
            });
        });
    }

    insertarEmpleado(objeto) {
        let self = this;
        MongoClient.connect(self.url, function (err, db) {
            let dbo = db.db(self.nombre);
            dbo.collection("empleados").insertOne(objeto, function (err, res) {
                if (err) throw err;
                db.close();
            });
        });
    }

    recuperarEmpleado(carnet) {
        let self = this;
        MongoClient.connect(self.url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(self.nombre);
            let query = { ci: carnet };
            dbo.collection("empleados").find(query).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
            });
        });
    }
}