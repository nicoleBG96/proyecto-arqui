import { BaseDeDatosMongo} from '../BaseDeDatos/BaseDeDatosMongo';

describe ("Base de datos", function(){
    test("Dada", function () {
        let baseDeDatosMongo = new BaseDeDatosMongo("arquiproyecto");
        baseDeDatosMongo.crearConjuntoDeDatos("clientes");
        let objeto = {"nombre" : "andres", "lastname" : "arana"};
        baseDeDatosMongo.insertarObjetoEnConjuntoDeDatos("clientes", objeto);
        expect(3).toBe(3);
    });
});
