var express = require('express');
var router = express.Router();
var RepositorioEmpleadosMongoDB = require('../../repositorios/RepositorioEmpleadosMongoDB').RepositorioEmpleadosMongoDB;
var RepositorioBoletasMongoDB = require('../../repositorios/RepositorioBoletasMongoDB').RepositorioBoletasMongoDB;
var RepositorioAsistenciasMongoDB = require('../../repositorios/RepositorioAsistenciasMongoDB').RepositorioAsistenciasMongoDB;
var RepositorioVentasMongoDB = require('../../repositorios/RepositorioVentasMongoDB').RepositorioVentasMongoDB;
var InteractorGenerarBoletas = require('../../dominio/Interactores/InteractorGenerarBoletas').InteractorGenerarBoletas;
var GenerarBoletasPeticion = require('../../dominio/DTO/GenerarBoletasPeticion').GenerarBoletasPeticion;
var GenerarBoletasRespuesta = require('../../dominio/DTO/GenerarBoletasRespuesta').GenerarBoletasRespuesta;

router.get('/', function (peticion, respuesta) {
    let generarBoletasPeticion = new GenerarBoletasPeticion(peticion);
    let interactorGenerarBoletas = new InteractorGenerarBoletas(new RepositorioEmpleadosMongoDB(), new RepositorioBoletasMongoDB(), new RepositorioAsistenciasMongoDB(), new RepositorioVentasMongoDB);
    interactorGenerarBoletas.generarBoletas(new Date(generarBoletasPeticion.darFormato()))
        .then(resp => {
            let generarBoletasRespuesta = new GenerarBoletasRespuesta(resp);
            respuesta.send(generarBoletasRespuesta.darFormato());
        }).catch(err => {
            console.log(err)
        });
});

module.exports = router;