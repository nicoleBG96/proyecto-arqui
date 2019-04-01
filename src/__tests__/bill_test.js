import {BoletaDePago, generarBoleta} from '../BoletaDePago'
import {Empleado} from '../Empleado'
import {CalculadoraEmpleadoFijo, CalculadoraEmpleadoParcial, CalculadoraVendedor} from '../CalculadoraDeSalario'

describe ("BoletaDePago", function(){
    test("dada una boleta de pago con nombre y salario de un empleado fijo", function () {
        let CalculadoraDeSalario = new CalculadoraEmpleadoFijo(1100,0, 0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",CalculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 0% \n Descuento Total: 0\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 1100");
    });

    test("dada una boleta de pago con nombre y salario de un empleado fijo con descuento del 10 porciento", function () {
        let CalculadoraDeSalario = new CalculadoraEmpleadoFijo(1100,10,0);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",CalculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 0%\n Total Aportes: 0\n Salario Total: 990");
    });

    test("dada una boleta de pago con nombre y salario de un empleado fijo con descuento del 10 porciento y aporte del 10 porciento", function () {
        let CalculadoraDeSalario = new CalculadoraEmpleadoFijo(1100,10,10);
        let empleado = new Empleado("Royer Torrico", 1, 2, "Champion",CalculadoraDeSalario);
        let boletaDePago = generarBoleta(empleado);
        expect(boletaDePago).toBe("Boleta de Pago \n Empleado: Royer Torrico \n Salario Basico: 1100\n Descuento: 10% \n Descuento Total: 110\n Aportes: 10%\n Total Aportes: 110\n Salario Total: 880");
    });

    test("get bill with name and salary of half-time employee", function () {
        let salaryCalculator = new HalfTimeEmployeeCalculator(100,11);
        let employee = new Employee("Royer Torrico", 1, 2, "Champion",salaryCalculator);
        let bill = generateBill(employee);
        expect(bill).toBe("Bill \n Employee: Royer Torrico \n Total Salary: 1100");
    });

    test("get bill with name and salary of salesman employee", function () {
        let salaryCalculator = new SalesmanCalculator(200,900);
        let employee = new Employee("Royer Torrico", 1, 2, "Champion",salaryCalculator);
        let bill = generateBill(employee);
        expect(bill).toBe("Bill \n Employee: Royer Torrico \n Total Salary: 1100");
    });
})