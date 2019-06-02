let MongoClient = require('mongodb').MongoClient;

class RepositorioAsistenciasMongoDB {
    constructor() {
        this.nombre = "arquiproyecto";
        this.url = "mongodb://localhost:27017/";
    }

    registrarAsistenciaDiaria(asistenciaDiaria) {
        let self = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(self.url, { useNewUrlParser: true }, function (error, daseDeDatos) {
                let daseDeDatosAbierta = daseDeDatos.db(self.nombre);
                daseDeDatosAbierta.collection("asistencias").insertOne(asistenciaDiaria, function (error, resultado) {
                    if (error) throw error;
                    resolve('Asistencia registrada satisfactoriamente');
                    daseDeDatos.close();
                });
            });
        })
    }

    recuperarAsistenciasDeEmpleado(codigoEmpleado) {
        let self = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(self.url, { useNewUrlParser: true }, function (err, daseDeDatos) {
                let daseDeDatosAbierta = daseDeDatos.db(self.nombre);
                daseDeDatosAbierta.collection("asistencias").find({codigoEmpleado : codigoEmpleado}).toArray(function (err, resultado) {
                    if (err) throw err;
                    resolve(resultado);
                    daseDeDatos.close();
                });
            });
        })
    }
}


module.exports = { RepositorioAsistenciasMongoDB };