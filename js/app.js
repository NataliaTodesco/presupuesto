let presupuesto = new Presupuesto();
presupuesto.agregarIngreso(ingreso);
presupuesto.agregarIngreso(ingreso1);
presupuesto.agregarEgreso(egreso);


window.addEventListener('load', mostrarPresupuesto);

function mostrarPresupuesto(){
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto.calcularPresupuesto());
    document.getElementById('ingreso').innerHTML = "+ "+formatoMoneda(presupuesto.calcularIngreso());
    document.getElementById('egreso').innerHTML = " - "+formatoMoneda(presupuesto.calcularEgreso());
    document.getElementById('promGral').innerHTML = presupuesto.porcentajeEgresos().toFixed(2)+"%";

    document.getElementById('itemIngreso').innerHTML = presupuesto.consultarIngresos();
    document.getElementById('itemEgreso').innerHTML = presupuesto.consultarEgresos();
}

function agregar() {
    const formulario = document.getElementById('formulario');
    let descripcion = formulario['descripcion'];
    let select = formulario['select'];
    let valor = formulario['valor'];

    if (select.selectedIndex == 0){
        let _ingreso = new Ingreso(parseFloat(valor.value),descripcion.value);
        presupuesto.agregarIngreso(_ingreso);
    }
    else{
        let _egreso = new Egreso(parseFloat(valor.value),descripcion.value);
        presupuesto.agregarEgreso(_egreso);
    }

    mostrarPresupuesto();
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2});
}
