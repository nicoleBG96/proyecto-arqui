export class TarjetaVentas {
    constructor() {
        this.ventas = [];
    }

    registrarVenta(venta) {
        this.ventas.push(venta);
    }

    calcularTotalDeComisiones() {
        let comisionTotal = 0;
        this.ventas.forEach(venta => {
            comisionTotal = comisionTotal + venta.calcularComisionDeVenta();
        });
        return comisionTotal;
    }
}