class CrearEmpleadoPeticion {
    constructor(peticion) {
        this.peticion = peticion;
    }

    removerCampos(empleado) {
        switch (empleado.Tipo) {
            case "Fijo":
                delete empleado["SalarioPorHora"]
                delete empleado["SalarioBase"]
                break;
            case "Parcial":
                delete empleado["Salario"]
                delete empleado["SalarioBase"]
                break;
            case "PorComision":
                delete empleado["SalarioPorHora"]
                delete empleado["Salario"]
                break;
        }
        return empleado;
    }

    seleccionarNotificadores(empleado) {
        if (empleado.Notificadores.NotificadorEmail === "") {
            delete empleado.Notificadores["NotificadorEmail"]
        }
        if (empleado.Notificadores.NotificadorFacebook === "") {
            delete empleado.Notificadores["NotificadorFacebook"]
        }
        if (empleado.Notificadores.NotificadorWhatsapp === "") {
            delete empleado.Notificadores["NotificadorWhatsapp"]
        }
        return empleado;
    }

    darFormato() {
        let fecha = new Date(this.peticion.body.FechaInicio);
        let empleado = {
            "Nombre": this.peticion.body.Nombre,
            "Codigo": parseInt(this.peticion.body.Codigo),
            "Ci": parseInt(this.peticion.body.Ci),
            "FechaInicio": (fecha.getMonth() + 1) + ", " + fecha.getDate() + ", " + fecha.getFullYear(),
            "Tipo": this.peticion.body.Tipo,
            "Cargo": this.peticion.body.Cargo,
            "MetodoDePago": this.peticion.body.MetodoDePago,
            "Salario": this.peticion.body.Salario,
            "SalarioPorHora": this.peticion.body.Salario,
            "SalarioBase": this.peticion.body.Salario,
            "Notificadores": this.peticion.body.Notificadores,
            "Sindicato": this.peticion.body.Sindicato
        };
        console.log(empleado);
        empleado = this.removerCampos(empleado);
        empleado = this.seleccionarNotificadores(empleado);
        return empleado;
    }
}

module.exports = { CrearEmpleadoPeticion };