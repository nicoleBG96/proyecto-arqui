var express = require('express');
var router = express.Router();
var RepositorioAsistenciasMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioAsistenciasMongoDB').RepositorioAsistenciasMongoDB;
var InteractorRegistrarAsistencia = require('../../dominio/Interactores/InteractorRegistrarAsistencia').InteractorRegistrarAsistencia;
var RecuperarEmpleadoPeticion = require('../../dominio/DTO/RecuperarEmpleadoPeticion').RecuperarEmpleadoPeticion;
var RecuperarEmpleadoRespuesta = require('../../dominio/DTO/RecuperarEmpleadoRespuesta').RecuperarEmpleadoRespuesta;

router.post('/', function (peticion, respuesta) {
    let recuperarEmpleadoPeticion = new RecuperarEmpleadoPeticion(peticion);
    let interactorRegistrarAsistencia = new InteractorRegistrarAsistencia(new RepositorioAsistenciasMongoDB());
    interactorRegistrarAsistencia.registrarAsistencia(recuperarEmpleadoPeticion.darFormato())
        .then(resp => {
            let recuperarEmpleadoRespuesta = new RecuperarEmpleadoRespuesta(resp);
            respuesta.send(recuperarEmpleadoRespuesta.darFormato());
        }).catch(err => {
            console.log(err)
        });
});

module.exports = router;