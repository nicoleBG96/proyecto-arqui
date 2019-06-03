var express = require('express');
var router = express.Router();
var RepositorioEmpleadosMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioEmpleadosMongoDB').RepositorioEmpleadosMongoDB;
var RepositorioBoletasMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioBoletasMongoDB').RepositorioBoletasMongoDB;
var InteractorGenerarBoletas = require('../../dominio/Interactores/InteractorGenerarBoletas').InteractorGenerarBoletas;
var GenerarBoletasPeticion = require('../../dominio/DTO/GenerarBoletasPeticion').GenerarBoletasPeticion;
var GenerarBoletasRespuesta = require('../../dominio/DTO/GenerarBoletasRespuesta').GenerarBoletasRespuesta;

router.get('/', function (peticion, respuesta) {
    let generarBoletasPeticion = new GenerarBoletasPeticion(peticion);
    let interactorGenerarBoletas = new InteractorGenerarBoletas(new RepositorioEmpleadosMongoDB(), new RepositorioBoletasMongoDB());
    interactorGenerarBoletas.generarBoletas(new Date(generarBoletasPeticion.darFormato()))
        .then(resp => {
            let generarBoletasRespuesta = new GenerarBoletasRespuesta(resp);
            respuesta.send(generarBoletasRespuesta.darFormato());
        }).catch(err => {
            console.log(err)
        });
});

module.exports = router;