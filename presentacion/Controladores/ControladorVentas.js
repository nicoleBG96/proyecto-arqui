var express = require('express');
var router = express.Router();
var RepositorioVentasMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioVentasMongoDB').RepositorioVentasMongoDB;
var InteractorRegistrarVenta = require('../../dominio/Interactores/InteractorRegistrarVenta').InteractorRegistrarVenta;
var RegistrarVentaPeticion = require('../../dominio/DTO/RegistrarVentaPeticion').RegistrarVentaPeticion;
var RegistrarVentaRespuesta = require('../../dominio/DTO/RegistrarVentaRespuesta').RegistrarVentaRespuesta;

router.post('/', function (peticion, respuesta) {
    let registrarVentaPeticion = new RegistrarVentaPeticion(peticion);
    let interactorRegistrarVenta = new InteractorRegistrarVenta(new RepositorioVentasMongoDB());
    interactorRegistrarVenta.registrarVenta(registrarVentaPeticion.darFormato())
        .then(resp => {
            let registrarVentaRespuesta = new RegistrarVentaRespuesta(resp);
            respuesta.send(registrarVentaRespuesta.darFormato());
        }).catch(err => {
            console.log(err);
        });
});

module.exports = router;