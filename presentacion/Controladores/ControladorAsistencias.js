var express = require('express');
var router = express.Router();
var RepositorioAsistenciasMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioAsistenciasMongoDB').RepositorioAsistenciasMongoDB;
var InteractorRegistrarAsistencia = require('../../dominio/Interactores/InteractorRegistrarAsistencia').InteractorRegistrarAsistencia;
var RegistrarAsistenciaPeticion = require('../../dominio/DTO/RegistrarAsistenciaPeticion').RegistrarAsistenciaPeticion;
var RegistrarAsistenciaRespuesta = require('../../dominio/DTO/RegistrarAsistenciaRespuesta').RegistrarAsistenciaRespuesta;

router.post('/', function (peticion, respuesta) {
    let registrarAsistenciaPeticion = new RegistrarAsistenciaPeticion(peticion);
    let interactorRegistrarAsistencia = new InteractorRegistrarAsistencia(new RepositorioAsistenciasMongoDB());
    interactorRegistrarAsistencia.registrarAsistencia(registrarAsistenciaPeticion.darFormato())
        .then(resp => {
            let registrarAsistenciaRespuesta = new RegistrarAsistenciaRespuesta(resp);
            respuesta.send(registrarAsistenciaRespuesta.darFormato());
        }).catch(err => {
            console.log(err)
        });
});

module.exports = router;