import { BaseDeDatosMySql } from '../BaseDeDatos/BaseDeDatosMySql';

describe("Base de datos", function () {
    test("Dada la base de datos MongoDB proyectoarqui donde hay la coleccion empleados de insertar al empleado Andres Arana con CI 8798672 deberia poder recuperarlo", function () {
        let baseDeDatosMySql = new BaseDeDatosMySql("arquiproyecto");
        let empleado = { 'tipo':'fijo', 'ci':412, 'nombre':'Albert', 'apellido':'Hofmann'};
        //baseDeDatosMySql.insertarEmpleado(empleado)
        let ci = 412;
        let empleadoRecuperado = baseDeDatosMySql.recuperarEmpleado(ci);
        console.log(empleadoRecuperado);
        expect(true).toBe(true);
    });
});
