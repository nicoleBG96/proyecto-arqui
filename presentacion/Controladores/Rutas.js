var express = require('express');
var router = express.Router();

//Import API's
var empleado = require('./ControladorEmpleados');
var boleta = require('./ControladorBoletas');
var asistencia = require('./ControladorAsistencias');

//Use API's
router.use("/empleado", empleado);
router.use("/boleta", boleta);
router.use("/asistencia", asistencia);

module.exports = router;