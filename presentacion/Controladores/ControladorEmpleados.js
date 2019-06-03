var express = require('express');
var router = express.Router();
var RepositorioEmpleadosMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioEmpleadosMongoDB').RepositorioEmpleadosMongoDB;
var InteractorCrearEmpleado = require('../../dominio/Interactores/InteractorCrearEmpleado').InteractorCrearEmpleado;
var CrearEmpleadoPeticion = require('../../dominio/DTO/CrearEmpleadoPeticion').CrearEmpleadoPeticion;
var CrearEmpleadoRespuesta = require('../../dominio/DTO/CrearEmpleadoRespuesta').CrearEmpleadoRespuesta;
var InteractorRecuperarEmpleado = require('../../dominio/Interactores/InteractorRecuperarEmpleado').InteractorRecuperarEmpleado;
var RecuperarEmpleadoPeticion = require('../../dominio/DTO/RecuperarEmpleadoPeticion').RecuperarEmpleadoPeticion;
var RecuperarEmpleadoRespuesta = require('../../dominio/DTO/RecuperarEmpleadoRespuesta').RecuperarEmpleadoRespuesta;
var InteractorActualizarEmpleado = require('../../dominio/Interactores/InteractorActualizarEmpleado').InteractorActualizarEmpleado;
var ActualizarEmpleadoPeticion = require('../../dominio/DTO/ActualizarEmpleadoPeticion').ActualizarEmpleadoPeticion;
var ActualizarEmpleadoRespuesta = require('../../dominio/DTO/ActualizarEmpleadoRespuesta').ActualizarEmpleadoRespuesta;

router.get('/', function (peticion, respuesta) {
    let recuperarEmpleadoPeticion = new CrearEmpleadoPeticion(peticion);
    let recuperarTodosLosEmpleados = new InteractorRecuperarEmpleado(new RepositorioEmpleadosMongoDB());
    recuperarTodosLosEmpleados.recuperarEmpleados()
        .then(resp => {
            let recuperarEmpleadoRespuesta = new RecuperarEmpleadoRespuesta(resp);
            respuesta.send(recuperarEmpleadoRespuesta.darFormato());
        }).catch(err => {
            console.log(err)
        });
});

router.post('/', function (peticion, respuesta) {
    let crearEmpleadoPeticion = new CrearEmpleadoPeticion(peticion);
    let empleado = crearEmpleadoPeticion.darFormato();
    let crearEmpleado = new InteractorCrearEmpleado(new RepositorioEmpleadosMongoDB());
    crearEmpleado.crearNuevoEmpleado(empleado)
        .then(resp => {
            let crearEmpleadoRespuesta = new CrearEmpleadoRespuesta(resp);
            respuesta.send(crearEmpleadoRespuesta.darFormato());
        }).catch(err => {
            console.log(err)
        });
});

router.put('/', function (peticion, respuesta) {
    let actualizarEmpleadoPeticion = new actualizarEmpleadoPeticion(peticion);
    let empleado = actualizarEmpleadoPeticion.darFormato();
    let actualizarEmpleado = new InteractorActualizarEmpleado(new RepositorioEmpleadosMongoDB());
    actualizarEmpleado.actualizarEmpleado(empleado)
        .then(resp => {
            let actualizarEmpleadoRespuesta = new ActualizarEmpleadoRespuesta(resp);
            respuesta.send(actualizarEmpleadoRespuesta.darFormato());
        }).catch(err => {
            console.log(err)
        });
});

module.exports = router;