const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const routes = require('./presentacion/Controladores/Rutas');
const cors = require('cors')
const app = express();

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));

app.use(cors());

app.use('/', routes);

var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

exports.app = app;
