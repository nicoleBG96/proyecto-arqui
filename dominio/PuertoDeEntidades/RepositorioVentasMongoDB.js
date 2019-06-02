let MongoClient = require('mongodb').MongoClient;

class RepositorioVentasMongoDB {
    constructor() {
        this.nombre = "arquiproyecto";
        this.url = "mongodb://localhost:27017/";
    }

    registrarVenta(venta) {
        let self = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(self.url, { useNewUrlParser: true }, function (error, daseDeDatos) {
                let daseDeDatosAbierta = daseDeDatos.db(self.nombre);
                daseDeDatosAbierta.collection("ventas").insertOne(venta, function (error, resultado) {
                    if (error) throw error;
                    resolve('Venta registrada satisfactoriamente');
                    daseDeDatos.close();
                });
            });
        })
    }

    recuperarVentasDeEmpleado(codigoEmpleado) {
        let self = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(self.url, { useNewUrlParser: true }, function (err, daseDeDatos) {
                let daseDeDatosAbierta = daseDeDatos.db(self.nombre);
                daseDeDatosAbierta.collection("ventas").find({codigoEmpleado : codigoEmpleado}).toArray(function (err, resultado) {
                    if (err) throw err;
                    resolve(resultado);
                    daseDeDatos.close();
                });
            });
        })
    }
}


module.exports = { RepositorioVentasMongoDB };