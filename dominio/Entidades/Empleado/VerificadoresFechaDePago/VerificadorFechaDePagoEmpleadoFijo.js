class VerificadorFechaDePagoEmpleadoFijo {
    constructor() {

    }

    esFechaDePago(fecha) {
        function esFechaHabil(fecha){
            return fecha.getDay() >= 1 && fecha.getDay() <= 5;
        }

        function esAnioBisiesto(fecha){
            if (((fecha.getFullYear() % 4 == 0) && (fecha.getFullYear() % 100 != 0 )) || (fecha.getFullYear() % 400 == 0)){
                return true;
            }
            return false;
        }

        function obtenerTotalDeDiasDelMes(fecha){
            switch(fecha.getMonth()){
                case 1:
                    if(esAnioBisiesto(fecha)){
                        return 29;
                    }
                    return 28;
                case 3:
                case 5:
                case 8:
                case 10:
                    return 30;
                default:
                    return 31;
            }
        }
        
        function esUltimoDiaHabilDelMes(fecha) {
            let aux = fecha;
            for(let i = obtenerTotalDeDiasDelMes(fecha); i > fecha.getDate(); i--){
                aux.setDate(i);
                if(esFechaHabil(aux)){
                    return false;
                }
            }
            return true;
        }

        if(esFechaHabil(fecha)){
            return esUltimoDiaHabilDelMes(fecha);
        }

        return false;
    }
}

module.exports = { VerificadorFechaDePagoEmpleadoFijo };