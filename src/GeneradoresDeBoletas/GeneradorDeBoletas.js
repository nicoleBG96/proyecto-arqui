import { Boleta } from '../Entidades/Boleta';

export class GeneradorDeBoletas {
    constructor() {
    }

    sePuedeGenerarLaBoletaDelEmpleado(empleado){
        return empleado.esSuDiaDePaga(this.fechaDeEmision);
    }

    generarUnaBoleta(empleado, fecha) {
        if(sePuedeGenerarLaBoletaDelEmpleado(empleado)){
            let boleta = new Boleta(empleado, fecha);
            return boleta.generarBoletaDelEmpleado();
        }else{
            return "No se puede generar la boleta";
        }
    }

    generarVariasBoletas(empleados, fecha) {
        let boletas = []
        empleados.forEach(empleado => {
            boletas.add(generarUnaBoleta(empleado, fecha));
        });
        return boletas;
    }
}