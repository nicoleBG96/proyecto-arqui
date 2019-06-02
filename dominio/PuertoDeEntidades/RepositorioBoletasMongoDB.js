let MongoClient = require('mongodb').MongoClient;

class RepositorioBoletasMongoDB {
    constructor() {
        this.nombre = "arquiproyecto";
        this.url = "mongodb://localhost:27017/";
    }

    insertarVariasBoletas(boletas) {
        let self = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(self.url, { useNewUrlParser: true }, function (error, daseDeDatos) {
                let daseDeDatosAbierta = daseDeDatos.db(self.nombre);
                daseDeDatosAbierta.collection("boletas").insertMany(boletas, function (error, resultado) {
                    if (error) throw error;
                    resolve(boletas);
                    daseDeDatos.close();
                });
            });
        })
    }

    // recuperarTodasLasBoletas() {
    //     let self = this;
    //     return new Promise(function (resolve, reject) {
    //         MongoClient.connect(self.url, { useNewUrlParser: true }, function (err, daseDeDatos) {
    //             let daseDeDatosAbierta = daseDeDatos.db(self.nombre);
    //             daseDeDatosAbierta.collection("empleados").find({}).toArray(function (err, resultado) {
    //                 if (err) throw err;
    //                 resolve(resultado);
    //                 daseDeDatos.close();
    //             });
    //         });
    //     })
    // }
}


module.exports = { RepositorioBoletasMongoDB };