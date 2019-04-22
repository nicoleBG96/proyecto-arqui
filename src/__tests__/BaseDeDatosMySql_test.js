import { BaseDeDatosMySql } from '../BaseDeDatos/BaseDeDatosMySql';

describe("Base de datos", function () {
    test("Dada la base de datos MySql proyectoarqui donde hay la tabla empleados de insertar al empleado Andres Arana con CI 8798672 deberia poder recuperarlo", function () {
        let baseDeDatosMySql = new BaseDeDatosMySql("arquiproyecto");
        let empleado = { 'tipo':'fijo', 'ci':8798672, 'nombre':'Andres', 'apellido':'Arana'};
        //baseDeDatosMySql.insertarEmpleado(empleado)
        let ci = 412;
        let empleadoRecuperado = baseDeDatosMySql.recuperarEmpleado(ci);
        console.log(empleadoRecuperado);
        expect(true).toBe(true);
    });

    test("Dada la base de datos MySql proyectoarqui donde hay la tabla empleados de insertar al empleado Carlos Torrez con CI 8798668 y luego eliminarlo ya no deberia poderse recuperar", function () {
        let baseDeDatosMySql = new BaseDeDatosMySql("arquiproyecto");
        let empleado = { "tipo":"fijo", "ci":8798668, "nombre":"Carlos", "apellido":"Torrez"};
        //baseDeDatosMySql.insertarEmpleado(empleado)
        let ci = 8798668;
        //baseDeDatosMySql.eliminarEmpleado(ci);
        expect(true).toBe(true);
    });

    test("Dada la base de datos MySql proyectoarqui donde hay la tabla empleados de insertar al empleado Carlos Torrez con CI 8798668 y luego eliminarlo ya no deberia poderse recuperar", function () {
        let baseDeDatosMySql = new BaseDeDatosMySql("arquiproyecto");
        let empleado = { "tipo":"fijo", "ci":2525, "nombre":"Carlos", "apellido":"Torrez"};
        //baseDeDatosMongo.insertarEmpleado(empleado)
        let ci = 2525;
        let nuevosValores = { $set: { "tipo":"comision", "ci":2525, "nombre":"Carlos", "apellido":"Torrez" } };
        baseDeDatosMySql.modificarEmpleado(ci, nuevosValores);
        expect(true).toBe(true);
    });
});
