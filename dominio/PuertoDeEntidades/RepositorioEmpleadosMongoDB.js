let MongoClient = require('mongodb').MongoClient;

class RepositorioEmpleadosMongoDB {
    constructor() {
        this.nombre = "arquiproyecto";
        this.url = "mongodb://localhost:27017/";
    }

    insertarEmpleado(empleado) {
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

    recuperarTodosLosEmpleado() {
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

    actualizarEmpleado(nuevosValores) {
        return new Promise(function (resolve, reject) {
            let self = this;
            var empleado = nuevosValores;
            var o_id = new mongo.ObjectID(empleado._id);
            delete empleado["_id"];
            MongoClient.connect(self.url, function (error, daseDeDatos) {
                if (error) throw error;
                let daseDeDatosAbierta = daseDeDatos.db(self.nombre);
                let miQuery = { _id: o_id };
                let nuevoQuery = { $set: user };
                daseDeDatosAbierta.collection("empleados").updateOne(miQuery, nuevoQuery, function (error, respuesta) {
                    if (error) throw error;
                    resolve('Empleado modificado satisfactoriamente');
                    daseDeDatos.close();
                });
            });
        })
    }

}


module.exports = { RepositorioEmpleadosMongoDB };