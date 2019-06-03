let Boleta = require('../Boleta').Boleta;

class GeneradorDeBoletas {
    constructor() {
    }

    sePuedeGenerarLaBoletaDelEmpleado(empleado, fecha){
        return empleado.esSuDiaDePaga(fecha);
    }

    generarError(){
        return { "Error" :  "No se puede generar la boleta"};
    }

    generarUnaBoleta(empleado, fecha) {
        if(this.sePuedeGenerarLaBoletaDelEmpleado(empleado, fecha)){
            let boleta = new Boleta(empleado, fecha);
            empleado.enviarNotificacion();
            return boleta.generarBoletaDelEmpleado();
        }else{
            return this.generarError();
        }
    }

    generarVariasBoletas(empleados, fecha) {
        let boletas = []
        empleados.forEach(empleado => {
            boletas.push(this.generarUnaBoleta(empleado, fecha));
        });
        return boletas;
    }
}

module.exports = { GeneradorDeBoletas };