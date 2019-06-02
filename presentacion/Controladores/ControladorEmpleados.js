var express = require('express');
var router = express.Router();
var RepositorioEmpleadosMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioEmpleadosMongoDB').RepositorioEmpleadosMongoDB;
var InteractorCrearEmpleado = require('../../dominio/Interactores/InteractorCrearEmpleado').InteractorCrearEmpleado;
var CrearEmpleadoPeticion = require('../../dominio/DTO/CrearEmpleadoPeticion').CrearEmpleadoPeticion;
var CrearEmpleadoRespuesta = require('../../dominio/DTO/CrearEmpleadoRespuesta').CrearEmpleadoRespuesta;
var InteractorRecuperarEmpleado = require('../../dominio/Interactores/InteractorRecuperarEmpleado').InteractorRecuperarEmpleado;
var RecuperarEmpleadoPeticion = require('../../dominio/DTO/RecuperarEmpleadoPeticion').RecuperarEmpleadoPeticion;
var RecuperarEmpleadoRespuesta = require('../../dominio/DTO/RecuperarEmpleadoRespuesta').RecuperarEmpleadoRespuesta;

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

router.get('/:_id', function (req, res) {
    res.send("GET");
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

router.put('/', function (req, res) {
    res.send("PUT");
});

router.delete('/:_id', function (req, res) {
    res.send("DELETE");
});

module.exports = router;