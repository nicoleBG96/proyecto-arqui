class CalculadoraSalarioEmpleadoFijo {
    constructor(salario, fechaInicio) {
        this.salario = salario;
        this.fechaInicio = fechaInicio;
    }

    comenzoATrabajarEsteMes(){
        let fechaActual = new Date();
        return this.fechaInicio.getMonth() === fechaActual.getMonth();
    }

    comenzoATrabajarEsteAnio(){
        let fechaActual = new Date();
        return this.fechaInicio.getFullYear() === fechaActual.getFullYear();
    }

    esElPrimerMesDelEmpleado(){
        return this.comenzoATrabajarEsteMes() && this.comenzoATrabajarEsteAnio();
    }

    calcularPrimerSalarioAPagar(){
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

        function esFechaHabil(fecha){
            return fecha.getDay() >= 1 && fecha.getDay() <= 5;
        }

        function obtenerTotalDeDiasHabilesDelMes(fecha){
            let auxiliar = fecha;
            let numeroDiasHabiles = 0;
            for(let i = 1; i <= obtenerTotalDeDiasDelMes(fecha); i++){
                auxiliar.setDate(i);
                if(esFechaHabil(auxiliar)){
                    numeroDiasHabiles++;
                }
            }
            return numeroDiasHabiles;
        }

        function obtenerTotalDeDiasTrabajadosDelMes(fecha){
            let auxiliar = fecha;
            let numeroDiasHabiles = 0;
            for(let i = fecha.getDate(); i <= obtenerTotalDeDiasDelMes(fecha); i++){
                auxiliar.setDate(i);
                if(esFechaHabil(auxiliar)){
                    numeroDiasHabiles++;
                }
            }
            return numeroDiasHabiles;
        }
        return this.salario * parseFloat(obtenerTotalDeDiasTrabajadosDelMes(this.fechaInicio) / obtenerTotalDeDiasHabilesDelMes(this.fechaInicio));
    }

    calcularSalarioAPagar() {
        if(this.esElPrimerMesDelEmpleado()){
            return this.calcularPrimerSalarioAPagar();
        }
        return this.salario;
    }
    
}

module.exports = { CalculadoraSalarioEmpleadoFijo };