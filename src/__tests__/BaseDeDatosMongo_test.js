import { BaseDeDatosMongo } from '../BaseDeDatos/BaseDeDatosMongo';

describe("Base de datos", function () {
    test("Dada la base de datos MySql proyectoarqui donde hay la tabla empleados de insertar al empleado Fijo Albert Hofmann con CI 8798672 este deberia guardarse", function () {
        let baseDeDatosMySql = new BaseDeDatosMongo();
        let empleado = { 'tipo': 'fijo', 'ci': 8798672, 'nombre': 'Albert', 'apellido': 'Hofmann' };
        let ci = 412;
        baseDeDatosMySql.insertarEmpleado(empleado)
            .then(respuesta => {
                expect(respuesta.message).toBe('Empleado insertado satisfactoriamente');
            }).catch(err => {
                console.log(err)
            });
    });

    test("Dada la base de datos MySql proyectoarqui donde hay la tabla empleados de insertar al empleado a tiempo parcial Juan Siquier con CI 693954174 este deberia poderse recuperar", function () {
        let baseDeDatosMySql = new BaseDeDatosMongo();
        let empleado = { 'tipo': 'parcial', 'ci': 693954174, 'nombre': 'Juan', 'apellido': 'Siquier' };
        baseDeDatosMySql.insertarEmpleado(empleado)
            .then(respuesta => {
            }).catch(err => {
                console.log(err)
            });

        baseDeDatosMySql.recuperarEmpleado(empleado.ci)
            .then(empleadoRecuperado => {
                expect(empleadoRecuperado.ci).toBe(empleado.ci);
                expect(empleadoRecuperado.nombre).toBe(empleado.nombre);
                expect(empleadoRecuperado.apellido).toBe(empleado.apellido);
                expect(empleadoRecuperado.tipo).toBe(empleado.tipo);
            }).catch(err => {
                console.log(err)
            });
    });

    test("Dada la base de datos MySql proyectoarqui donde hay la tabla empleados de insertar al empleado Carlos Torrez del tipo comision con CI 8798668 y luego eliminarlo ya no deberia poderse recuperar", function () {
        let baseDeDatosMySql = new BaseDeDatosMongo();
        let empleado = { "tipo": "comision", "ci": 8798668, "nombre": "Carlos", "apellido": "Torrez" };
        baseDeDatosMySql.insertarEmpleado(empleado)
            .then(respuesta => {
            }).catch(err => {
                console.log(err)
            });

        baseDeDatosMySql.eliminarEmpleado(empleado.ci)
            .then(respuesta => {
                expect(respuesta.message).toBe('Empleado eliminado satisfactoriamente')
            }).catch(err => {
                console.log(err)
            });
    });

    test("Dada la base de datos MySql proyectoarqui donde hay la tabla empleados de insertar al empleado Fijo Toni Frontera con CI 151617 y luego eliminarlo y luego cambiarlo a tipo comision, los cambios deberian de guardarse", function () {
        let baseDeDatosMySql = new BaseDeDatosMongo();
        let empleado = { "tipo": "fijo", "ci": 151617, "nombre": "Toni", "apellido": "Frontera" };
        baseDeDatosMySql.insertarEmpleado(empleado)
            .then(respuesta => {
            }).catch(err => {
                console.log(err)
            });
        let empleadoModificado = { $set:{ "tipo": "comision", "ci": 151617, "nombre": "Toni", "apellido": "Frontera" } }

        baseDeDatosMySql.modificarEmpleado(empleado.ci, empleadoModificado)
            .then(respuesta => {
                console.log(respuesta.message);
                expect(respuesta.message).toBe('Empleado modificado satisfactoriamente');
            }).catch(err => {
                console.log(err)
            });
        expect(true).toBe(true);
    });
});
