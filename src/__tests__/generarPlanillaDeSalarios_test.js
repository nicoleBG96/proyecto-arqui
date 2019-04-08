import {generarPlanillaDeSalarios} from '../generarPlanillaDeSalarios'
import {Empleado} from '../Empleado'
import {CalculadoraEmpleadoFijo, CalculadoraEmpleadoParcial, CalculadoraVendedor} from '../CalculadoraDeSalario'
import { TarjetaDeAsistencia } from '../TarjetaDeAsistencia';
import { AsistenciaDiaria } from '../AsistenciaDiaria';
import {ComprobanteFechaDePagoEmpleadoFijo, ComprobanteFechaDePagoEmpleadoParcial, ComprobanteFechaDePagoVendedor} from '../ComprobanteFechaDePago';
import { Ventas } from '../Ventas';
import { TarjetaDeVenta } from '../TarjetaDeVenta';

describe ("generarPlanillaDeSalarios", function(){
    test("dada una lista de 3 empleados generar la planilla con las boletas de pagos de cada uno", function () {
        let empleados = [];

        let comprobanteFechaDePagoEmpleadoFijo = new ComprobanteFechaDePagoEmpleadoFijo();
        let calculadoraDeSalario1 = new CalculadoraEmpleadoFijo(comprobanteFechaDePagoEmpleadoFijo, 1100,0, 0);
        let empleado1 = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario1);
        
        let comprobanteFechaDePagoEmpleadoParcial = new ComprobanteFechaDePagoEmpleadoParcial();
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario2 = new CalculadoraEmpleadoParcial(comprobanteFechaDePagoEmpleadoParcial, 100, tarjetaDeAsistencia);
        let empleado2 = new Empleado("Laura Meneses", 1, 2, "Secretary",calculadoraDeSalario2);
        
        let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
        let ventas = new Ventas();
        let tarjetaDeVenta1 = new TarjetaDeVenta("05/03/2019",1000, 50);
        ventas.registrarVenta(tarjetaDeVenta1);
        let calculadoraDeSalario3 = new CalculadoraVendedor(comprobanteFechaDePagoVendedor,100, ventas);
        let empleado3 = new Empleado("Ronald Escobar", 1, 2, "Boss",calculadoraDeSalario3);
        
        empleados.push(empleado1);
        empleados.push(empleado2);
        empleados.push(empleado3);

        let fecha = new Date('5, 31, 2019');
        let planillaDeSalarios = generarPlanillaDeSalarios(empleados, fecha);
        expect(planillaDeSalarios).toBe("Planilla de Salarios:\n"
        + "Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 0% \n Descuento Total: 0\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 1100\n"
        + "Boleta de Pago \n Empleado: Laura Meneses \n Salario Total: 300\n"
        + "Boleta de Pago \n Empleado: Ronald Escobar \n No es fecha de pago del empleado\n");
    });

})