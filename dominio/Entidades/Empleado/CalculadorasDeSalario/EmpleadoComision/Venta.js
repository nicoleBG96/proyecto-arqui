export class Venta {
    constructor(fecha, montoVendido, porcentajeDeComision){
        this.fecha = fecha;
        this.montoVendido = montoVendido;
        this.porcentajeDeComision = porcentajeDeComision;
    }

    calcularComisionDeVenta(){
        return this.montoVendido * this.porcentajeDeComision / 100;
    }
}