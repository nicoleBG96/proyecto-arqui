const AsistenciaDiaria = require('../dominio/Entidades/Empleado/CalculadorasDeSalario/EmpleadoTiempoParcial/AsistenciaDiaria').AsistenciaDiaria;

describe ("AsistenciaDiaria", function(){
    test("dada una asistencia diaria con entrada a las 9:00 y salida a las 12:00, deberia devolver 3 horas trabajadas", function () {
        let asistenciDiaria = new AsistenciaDiaria("29/01/2019", 9, 12)
        expect(asistenciDiaria.calcularHorasTrabajadas()).toBe(3);
    });
})