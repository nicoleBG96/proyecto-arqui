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
                daseDeDatosAbierta.collection("empleados").insertOne(empleado, function (error, respuesta) {
                    if (error) throw error;
                    resolve('Empleado insertado satisfactoriamente');
                    daseDeDatos.close();
                });
            });
        })
    }

    // recuperarEmpleado(carnet) {
    //     let self = this;
    //     return new Promise(function (resolve, reject) {
    //         let empleado;
    //         MongoClient.connect(self.url, function (error, daseDeDatos) {
    //             if (error) throw error;
    //             let daseDeDatosAbierta = daseDeDatos.daseDeDatos(self.nombre);
    //             let query = { ci: carnet };
    //             daseDeDatosAbierta.collection("empleados").find(query).toArray(function (error, resultado) {
    //                 if (error) throw error;
    //                 empleado = resultado[0];
    //                 resolve(empleado);
    //                 daseDeDatos.close();
    //             });
    //         });
    //     })
    // }

    // eliminarEmpleado(carnet) {
    //     let self = this;
    //     return new Promise(function (resolve, reject) {
    //         MongoClient.connect(self.url, function (error, daseDeDatos) {
    //             if (error) throw error;
    //             let daseDeDatosAbierta = daseDeDatos.daseDeDatos(self.nombre);
    //             let query = { ci: carnet };
    //             daseDeDatosAbierta.collection("empleados").deleteOne(query, function (error, obj) {
    //                 obj.message = 'Empleado eliminado satisfactoriamente';
    //                 resolve(obj);
    //                 daseDeDatos.close();
    //             });
    //         });
    //     })
    // }

    // modificarEmpleado(carnet, nuevosValorespuesta) {
    //     return new Promise(function (resolve, reject) {
    //         let self = this;
    //         MongoClient.connect(self.url, function (error, daseDeDatos) {
    //             if (error) throw error;
    //             let daseDeDatosAbierta = daseDeDatos.daseDeDatos(self.nombre);
    //             let query = { ci: carnet };
    //             daseDeDatosAbierta.collection("empleados").updateOne(query, nuevosValorespuesta, function (error, respuesta) {
    //                 if (error) throw error;
    //                 respuesta.message = 'Empleado modificado satisfactoriamente';
    //                 resolve(respuesta);
    //                 daseDeDatos.close();
    //             });
    //         });
    //     })
    // }
}


module.exports = { RepositorioEmpleadosMongoDB };