class InteractorRegistrarVenta {
    constructor(respositorioVentas) {
        this.respositorioVentas = respositorioVentas;
    }

    registrarVenta(venta) {
        let self = this;
        return new Promise(function (resolve, reject) {
            self.respositorioVentas.registrarVenta(venta)
                .then(respuesta => {
                    resolve(respuesta);
                }).catch(err => {
                    console.log(err)
                });
        })
    }
}

module.exports = { InteractorRegistrarVenta };