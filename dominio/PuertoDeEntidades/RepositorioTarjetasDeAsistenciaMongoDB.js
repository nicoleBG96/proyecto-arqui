let MongoClient = require('mongodb').MongoClient;

class RepositorioTarjetasDeAsistenciaMongoDB {
    constructor() {
        this.nombre = "arquiproyecto";
        this.url = "mongodb://localhost:27017/";
    }

    insertarAsistenciaDiaria(asistenciaDiaria) {
        let self = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(self.url, { useNewUrlParser: true }, function (error, daseDeDatos) {
                let daseDeDatosAbierta = daseDeDatos.db(self.nombre);
                daseDeDatosAbierta.collection("empleados").insertOne(empleado, function (error, resultado) {
                    if (error) throw error;
                    resolve('Empleado insertado satisfactoriamente');
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
                daseDeDatosAbierta.collection("empleados").find({}).toArray(function (err, resultado) {
                    if (err) throw err;
                    resolve(resultado);
                    daseDeDatos.close();
                });
            });
        })
    }
}


module.exports = { RepositorioEmpleadosMongoDB };