var express = require('express');
var router = express.Router();
var RepositorioEmpleadosMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioEmpleadosMongoDB').RepositorioEmpleadosMongoDB;
var RepositorioBoletasMongoDB = require('../../dominio/PuertoDeEntidades/RepositorioBoletasMongoDB').RepositorioBoletasMongoDB;
var InteractorGenerarBoletas = require('../../dominio/Interactores/InteractorGenerarBoletas').InteractorGenerarBoletas;
var GenerarBoletasPeticion = require('../../dominio/DTO/GenerarBoletasPeticion').GenerarBoletasPeticion;
var GenerarBoletasRespuesta = require('../../dominio/DTO/GenerarBoletasRespuesta').GenerarBoletasRespuesta;

router.get('/', function (peticion, respuesta) {
    let generarBoletasPeticion = new GenerarBoletasPeticion(peticion);
    let interactosGenerarBoletas = new InteractorGenerarBoletas(new RepositorioEmpleadosMongoDB(), new RepositorioBoletasMongoDB());
    interactosGenerarBoletas.generarBoletas()
        .then(resp => {
            let generarBoletasRespuesta = new GenerarBoletasRespuesta(resp);
            respuesta.send(resp);
        }).catch(err => {
            console.log(err)
        });
});

module.exports = router;