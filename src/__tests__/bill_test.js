import {BoletaDePago, generarBoleta} from '../BoletaDePago'
import {Empleado} from '../Empleado'
import {CalculadoraEmpleadoFijo, CalculadoraEmpleadoParcial, CalculadoraVendedor} from '../CalculadoraDeSalario'
import { TarjetaDeAsistencia } from '../TarjetaDeAsistencia';
import { AsistenciaDiaria } from '../AsistenciaDiaria';

describe ("BoletaDePago", function(){
    test("dada una boleta de pago con nombre y salario de un empleado fijo", function () {
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(1100,0, 0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 0% \n Descuento Total: 0\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 1100");
    });

    test("dada una boleta de pago con nombre y salario de un empleado fijo con descuento del 10 porciento", function () {
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(1100,10,0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 990");
    });

    test("dada una boleta de pago con nombre y salario de un empleado fijo con descuento del 10 porciento y aporte del 10 porciento", function () {
        let calculadoraDeSalario = new CalculadoraEmpleadoFijo(1100,10,10);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 10%\n Total Aportes: 110\n Salario Total: 880");
    });

    test("dada una boleta de pago con nombre y salario de un empleado parcial sin horas trabajadas", function () {
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 0");
    });

    test("dada una boleta de pago con nombre y salario de un empleado parcial con 3 horas trabajadas", function () {
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let asistenciaDiaria = new AsistenciaDiaria("30/03/2019", 9, 12);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria);
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 300");
    });

    test("dada una boleta de pago con nombre y salario de un empleado parcial con 3 horas trabajadas", function () {
        let tarjetaDeAsistencia = new TarjetaDeAsistencia();
        let asistenciaDiaria1 = new AsistenciaDiaria("28/03/2019", 9, 12);
        let asistenciaDiaria2 = new AsistenciaDiaria("29/03/2019", 9, 12);
        let asistenciaDiaria3 = new AsistenciaDiaria("30/03/2019", 8, 12);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria1);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria2);
        tarjetaDeAsistencia.registrarAsistencia(asistenciaDiaria3);
        let calculadoraDeSalario = new CalculadoraEmpleadoParcial(100, tarjetaDeAsistencia);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",calculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Total: 1000");
    });

    test("get bill with name and salary of salesman employee", function () {
        let salaryCalculator = new SalesmanCalculator(200,900);
        let employee = new Employee("Royer Torrico", 1, 2, "Champion",salaryCalculator);
        let bill = generateBill(employee);
        expect(bill).toBe("Bill \n Employee: Royer Torrico \n Total Salary: 1100");
    });
})