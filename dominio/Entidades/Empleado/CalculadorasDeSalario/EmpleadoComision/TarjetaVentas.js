class TarjetaVentas {
    constructor() {
        this.ventas = [];
    }

    registrarVenta(venta) {
        this.ventas.push(venta);
    }

    registrarVentas(ventas){
        this.ventas = ventas;
    }
    
    calcularTotalDeComisiones() {
        let comisionTotal = 0;
        this.ventas.forEach(venta => {
            comisionTotal = comisionTotal + venta.calcularComisionDeVenta();
        });
        return comisionTotal;
    }
}

module.exports = { TarjetaVentas };