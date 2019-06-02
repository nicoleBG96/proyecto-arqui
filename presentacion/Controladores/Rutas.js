var express = require('express');
var router = express.Router();

//Import API's
var empleado = require('./ControladorEmpleados');
var boletas = require('./ControladorBoletas')

//Use API's
router.use("/empleado", empleado);
router.use("/boletas", boletas);

module.exports = router;