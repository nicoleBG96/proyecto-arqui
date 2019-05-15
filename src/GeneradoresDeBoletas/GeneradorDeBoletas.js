import { Boleta } from '../Entidades/Boleta';

export class GeneradorDeBoletas {
    constructor() {
    }

    sePuedeGenerarLaBoletaDelEmpleado(empleado, fecha){
        return empleado.esSuDiaDePaga(fecha);
    }

    generarUnaBoleta(empleado, fecha) {
        if(this.sePuedeGenerarLaBoletaDelEmpleado(empleado, fecha)){
            let boleta = new Boleta(empleado, fecha);
            return boleta.generarBoletaDelEmpleado();
        }else{
            return "No se puede generar la boleta";
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