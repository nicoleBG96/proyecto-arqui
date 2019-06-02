var express = require('express');
var router = express.Router();
var InteractorCrearEmpleado = require('../Interactores/InteractorCrearEmpleado').InteractorCrearEmpleado;
var RepositorioEmpleadosMongoDB = require('../Repositorios/RepositorioEmpleadosMongoDB').RepositorioEmpleadosMongoDB;
var CrearEmpleadoPeticion = require('../Modeladores/CrearEmpleadoPeticion').CrearEmpleadoPeticion;
var CrearEmpleadoRespuesta = require('../Modeladores/CrearEmpleadoRespuesta').CrearEmpleadoRespuesta;

router.get('/', function (req, res) {
    res.send("POST-ALL");
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