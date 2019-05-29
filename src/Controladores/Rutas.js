var express = require('express');
var router = express.Router();

//Import API's
var empleado = require('./ControladorEmpleados');

//Use API's
router.use("/empleado", empleado);

module.exports = router;