class Ingreso{
    static contadorIngresos = 0;
    constructor(monto,descripcion){
        this.idIngreso = ++Ingreso.contadorIngresos;
        this.descripcion = descripcion;
        this._monto = monto;
    }
    get monto(){
        return this._monto;
    }
    toString(){
        return this.descripcion +" &nbsp &nbsp &nbsp &nbsp &nbsp $"+this.monto+"\n";
    }
}

class Egreso{
    static contadorEgresos = 0;
    constructor(monto,descripcion){
        this.idEgreso = ++Egreso.contadorEgresos;
        this.descripcion = descripcion;
        this._monto = monto;
    }
    get monto(){
        return this._monto;
    }
    
    toString(){
        return this.descripcion +" &nbsp &nbsp &nbsp &nbsp &nbsp $"+this.monto+"\n";
    }
}

class Presupuesto{
    static contadorPresupuestos = 0;
    constructor(){
        this.id = ++Presupuesto.contadorPresupuestos;
        this.ingreso = [];
        this.egreso = [];
    }
    agregarIngreso(ingreso){
        this.ingreso.push(ingreso);
    }
    agregarEgreso(Egreso){
        this.egreso.push(Egreso);
    }

    calcularIngreso(){
        let monto = 0;

        for (const i of this.ingreso) {
            monto += i.monto;
        }

        return monto;
    }

    calcularEgreso(){
        let monto = 0;

        for (const i of this.egreso) {
            monto += i.monto;
        }

        return monto;
    }

    calcularPresupuesto(){
        let montoI = 0;
        let montoE = 0;

        for (const i of this.ingreso) {
            montoI += i.monto;
        }

        for (const e of this.egreso) {
            montoE += e.monto;
        }

        return montoI - montoE;
    }

    consultarIngresos(){
        let aux = "";

        for (var i of this.ingreso) {
            aux += i.descripcion+" &nbsp &nbsp &nbsp &nbsp &nbsp + " + formatoMoneda(i.monto)+ "\n <hr>";
        }
        return aux;
    }
    consultarEgresos(){
        let aux = "";
        let porc = "";

        for (var i of this.egreso) {
            aux += i.descripcion+" &nbsp &nbsp &nbsp &nbsp &nbsp - " + formatoMoneda(i.monto) + "\n <hr>";
            porc += this.porcentaje(i.monto).toFixed(2)+ "%\n <hr>";
        }

        document.getElementById('prom').innerHTML = porc;
        return aux;
    }

    porcentaje(monto){
        return monto * 100 / this.calcularEgreso();
    }

    porcentajeEgresos(){
        let prom = 0;

        for (var e of this.egreso) {
            prom += e.monto;
        }

        return prom * 100 / this.calcularPresupuesto();
    }
}

let ingreso = new Ingreso(51000,"Salario");

let ingreso1 = new Ingreso(100,"Transferencia");

let egreso = new Egreso(5000,"Factura de Luz");

