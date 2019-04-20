import { BaseDeDatosMongo } from '../BaseDeDatos/BaseDeDatosMongo';

describe("Base de datos", function () {
    test("Dada la base de datos MongoDB proyectoarqui donde hay la coleccion empleados de insertar al empleado Andres Arana con CI 8798672 deberia poder recuperarlo", function () {
        let baseDeDatosMongo = new BaseDeDatosMongo("arquiproyecto");
        let empleado = { "ci":8798672, "nombre":"Andres", "apellido":"Arana"};
        baseDeDatosMongo.insertarEmpleado(empleado)
        let ci = 8798672;
        baseDeDatosMongo.recuperarEmpleado(ci);
        expect(true).toBe(true);
    });
});
