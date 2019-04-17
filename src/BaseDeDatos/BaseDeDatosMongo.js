let MongoClient = require('mongodb').MongoClient;

export class BaseDeDatosMongo {
    constructor(nombre) {
        this.nombre = nombre;
        this.url = "mongodb://localhost:27017/";
    }

    crearConjuntoDeDatos(nombreConjunto) {
        MongoClient.connect(this.url, function (err, db) {
            let dbo = db.db(this.nombre);
            dbo.createCollection(nombreConjunto, function (err, res) {
                if (err) throw err;
                db.close();
            });
        });
    }

    insertarObjetoEnConjuntoDeDatos(nombreConjunto, objeto){
        MongoClient.connect(this.url, function (err, db) {
            let dbo = db.db(this.nombre);
            dbo.collection(nombreConjunto).insertOne(objeto, function (err, res) {
                if (err) throw err;
                db.close();
            });
        });
    }
}