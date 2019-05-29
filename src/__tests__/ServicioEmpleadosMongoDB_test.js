import { ServicioEmpleadosMongoDB } from '../Repositorios/Servicios/ServicioEmpledosMongoDB';
import { RepositorioEmpleados } from '../Repositorios/RepositorioEmpleados';

describe("RepositorioEmpleadoMongoDB", function () {
    test("Dado un servicio de empleados MongoDB de insertar al empleado Fijo Albert Hofmann con CI 8798672 este deberia guardarse", function () {
        let servicioEmpleadosMongoDB = new ServicioEmpleadosMongoDB();
        let repositorioEmpleados = new RepositorioEmpleados(servicioEmpleadosMongoDB);
        let empleado = { 'tipo': 'fijo', 'ci': 8798672, 'nombre': 'Albert', 'apellido': 'Hofmann' };
        repositorioEmpleados.insertarEmpleado(empleado)
            .then(respuesta => {
                console.log(respuesta);
                expect(respuesta).toBe('Empleado insertado satisfactoriamente');
            }).catch(err => {
                console.log(err)
            });
        //expect(resp).toBe('Empleado insertado satisfactoriamente');
    });

    // test("Dado un repositorio de empleados MongoDB de insertar al empleado a tiempo parcial Juan Siquier con CI 693954174 este deberia poderse recuperar", function () {
    //     let baseDeDatosMySql = new RepositorioEmpleadoMongoDB();
    //     let empleado = { 'tipo': 'parcial', 'ci': 693954174, 'nombre': 'Juan', 'apellido': 'Siquier' };
    //     baseDeDatosMySql.insertarEmpleado(empleado)
    //         .then(respuesta => {
    //         }).catch(err => {
    //             console.log(err)
    //         });

    //     baseDeDatosMySql.recuperarEmpleado(empleado.ci)
    //         .then(empleadoRecuperado => {
    //             expect(empleadoRecuperado.ci).toBe(empleado.ci);
    //             expect(empleadoRecuperado.nombre).toBe(empleado.nombre);
    //             expect(empleadoRecuperado.apellido).toBe(empleado.apellido);
    //             expect(empleadoRecuperado.tipo).toBe(empleado.tipo);
    //         }).catch(err => {
    //             console.log(err)
    //         });
    // });

    // test("Dado un repositorio de empleados MongoDB de insertar al empleado Carlos Torrez del tipo comision con CI 8798668 y luego eliminarlo ya no deberia poderse recuperar", function () {
    //     let baseDeDatosMySql = new RepositorioEmpleadoMongoDB();
    //     let empleado = { "tipo": "comision", "ci": 8798668, "nombre": "Carlos", "apellido": "Torrez" };
    //     baseDeDatosMySql.insertarEmpleado(empleado)
    //         .then(respuesta => {
    //         }).catch(err => {
    //             console.log(err)
    //         });

    //     baseDeDatosMySql.eliminarEmpleado(empleado.ci)
    //         .then(respuesta => {
    //             expect(respuesta.message).toBe('Empleado eliminado satisfactoriamente')
    //         }).catch(err => {
    //             console.log(err)
    //         });
    // });

    // test("Dado un repositorio de empleados MongoDB de insertar al empleado Fijo Toni Frontera con CI 151617 y luego eliminarlo y luego cambiarlo a tipo comision, los cambios deberian de guardarse", function () {
    //     let baseDeDatosMySql = new RepositorioEmpleadoMongoDB();
    //     let empleado = { "tipo": "fijo", "ci": 151617, "nombre": "Toni", "apellido": "Frontera" };
    //     baseDeDatosMySql.insertarEmpleado(empleado)
    //         .then(respuesta => {
    //         }).catch(err => {
    //             console.log(err)
    //         });
    //     let empleadoModificado = { $set:{ "tipo": "comision", "ci": 151617, "nombre": "Toni", "apellido": "Frontera" } }

    //     baseDeDatosMySql.modificarEmpleado(empleado.ci, empleadoModificado)
    //         .then(respuesta => {
    //             console.log(respuesta.message);
    //             expect(respuesta.message).toBe('Empleado modificado satisfactoriamente');
    //         }).catch(err => {
    //             console.log(err)
    //         });
    //     expect(true).toBe(true);
    // });
});
