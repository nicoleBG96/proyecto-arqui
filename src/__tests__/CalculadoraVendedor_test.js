import {CalculadoraVendedor} from '../Calculadoras/CalculadoraDeSalario'
import {ComprobanteFechaDePagoVendedor} from '../Comprobantes/ComprobanteFechaDePago'
import { TarjetaDeVenta } from '../Comision/TarjetaDeVenta';
import { Ventas } from '../Comision/Ventas';

describe ("Calculadora Vendedor", function(){
    test("dado un salario basico de 2500, sin ventas realizadas, el salario total es de 2500", function () {
        let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
        let ventas = new Ventas();
        let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor, 2500, ventas);
        let fecha = new Date('5, 24, 2019');
        expect(calculadoraDeSalario.calcularSalario(fecha)).toBe("Salario Total: 2500");
    });

    test("dado un salario basico de 3000, sin ventas realizadas, el salario total es de 3500", function () {
        let comprobanteFechaDePagoVendedor = new ComprobanteFechaDePagoVendedor();
        let ventas = new Ventas();
        let tarjetaDeVenta1 = new TarjetaDeVenta("05/03/2019",1000, 50);
        ventas.registrarVenta(tarjetaDeVenta1);
        let calculadoraDeSalario = new CalculadoraVendedor(comprobanteFechaDePagoVendedor, 3000, ventas);
        let fecha = new Date('5, 24, 2019');
        expect(calculadoraDeSalario.calcularSalario(fecha)).toBe("Salario Total: 3500");
    });
})