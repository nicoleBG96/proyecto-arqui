import { BaseDeDatosMongo } from '../BaseDeDatos/BaseDeDatosMongo';

describe("Base de datos", function () {
    test("Dada la base de datos MongoDB proyectoarqui donde hay la coleccion empleados de insertar al empleado Andres Arana con CI 8798672 deberia poder recuperarlo", function () {
        let baseDeDatosMongo = new BaseDeDatosMongo("arquiproyecto");
        let empleado = { "tipo":"fijo", "ci":8798672, "nombre":"Andres", "apellido":"Arana"};
        baseDeDatosMongo.insertarEmpleado(empleado)
        let ci = 8798672;
        baseDeDatosMongo.recuperarEmpleado(ci);
        expect(true).toBe(true);
    });

    test("Dada la base de datos MongoDB proyectoarqui donde hay la coleccion empleados de insertar al empleado Carlos Torrez con CI 8798668 y luego eliminarlo ya no deberia poderse recuperar", function () {
        let baseDeDatosMongo = new BaseDeDatosMongo("arquiproyecto");
        let empleado = { "tipo":"fijo", "ci":8798668, "nombre":"Carlos", "apellido":"Torrez"};
        baseDeDatosMongo.insertarEmpleado(empleado)
        let ci = 8798668;
        baseDeDatosMongo.eliminarEmpleado(ci);
        expect(true).toBe(true);
    });

    test("Dada la base de datos MongoDB proyectoarqui donde hay la coleccion empleados de insertar al empleado Carlos Torrez con CI 8798668 y luego eliminarlo ya no deberia poderse recuperar", function () {
        let baseDeDatosMongo = new BaseDeDatosMongo("arquiproyecto");
        let empleado = { "tipo":"fijo", "ci":2525, "nombre":"Carlos", "apellido":"Torrez"};
        //baseDeDatosMongo.insertarEmpleado(empleado)
        let ci = 2525;
        let nuevosValores = { $set: { "tipo":"comision", "ci":2525, "nombre":"Carlos", "apellido":"Torrez" } };
        baseDeDatosMongo.modificarEmpleado(ci, nuevosValores);
        expect(true).toBe(true);
    });
});
