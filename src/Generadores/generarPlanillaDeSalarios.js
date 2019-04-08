import {generarBoleta} from '../Generadores/generarBoleta';

export function generarPlanillaDeSalarios(empleados,fecha){
    let planillaDeSalarios = "Planilla de Salarios:\n";
    empleados.forEach(empleado => {
        planillaDeSalarios = planillaDeSalarios + generarBoleta(empleado, fecha);
    });
    return planillaDeSalarios;
}