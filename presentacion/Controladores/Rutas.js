var express = require('express');
var router = express.Router();
var path = require('path');
//Import API's
var empleado = require('./ControladorEmpleados');
var boleta = require('./ControladorBoletas');
var asistencia = require('./ControladorAsistencias');
var venta = require('../Controladores/ControladorVentas');

//Use API's
router.use("/empleado", empleado);
router.use("/boleta", boleta);
router.use("/asistencia", asistencia);
router.use("/venta", venta);



module.exports = router;