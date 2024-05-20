/**
 * Convierte un valor ingresado por el usuario en metros, pie, pulgada o yarda
 * @method convertirUnidades
 * @param {string} nombre -id del elemento en html
 * @param {number} valor -valor ingresado por el usuario
 */
let convertirUnidades = (nombre, valor) =>{
    let valMetro, valPulgada, valPie, valYarda;
    if (valor.includes(",")){
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)){
        alert("El valor ingresado no es un numero");
        valMetro = " ";
        valPulgada = " ";
        valPie = " ";
        valYarda = " ";
    }else if (nombre=="metro"){
        valMetro = valor;
        valPulgada = valor*39.3701;
        valPie = valor*3.28084;
        valYarda = valor*1.09361;
    }else if (nombre=="pulgada"){
        valPulgada = valor;
        valMetro = valor/39.37;
        valPie = valor/12;
        valYarda = valor/36;
    }else if (nombre=="pie"){
        valPie = valor;
        valPulgada = valor/3;
        valMetro = valor/3.281;
        valYarda = valor/3;
    }else if (nombre=="yarda"){
        valYarda = valor;
        valPulgada = valor*36;
        valPie = valor*3;
        valMetro = valor/1.094;
    }
    //primera forma de hacer que tenga dos decimales
    document.getElementById("metro").value = Math.round(valMetro*100)/100;
    document.getElementById("pulgada").value = Math.round(valPulgada*100)/100;
    //segunda forma de hacer que tenga dos decimales
    document.getElementById("pie").value = valPie.toFixed(2);
    document.getElementById("yarda").value = valYarda.toFixed(2);
}

function convertirGR(id){
    if (id==="grados"){
        let grad = document.getElementById("grados").value;
        let rad = grad*Math.PI/180;
        document.getElementById("radianes").value = rad;
    }else if (id==="radianes"){
        let rad = document.getElementById("radianes").value;
        let grad = rad*180/rad;
        document.getElementById("grados").value = grad;
    }
}

let mostrarOcultar = (valorMO) =>{
    if (valorMO==="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if (valorMO==="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

let sumar = () =>{
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].value = num1 + num2;
}
let restar = () =>{
    let num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].value = num1 - num2;
}
let multiplicar = () =>{
    let num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].value = num1 * num2;
}
let dividir = () =>{
    let num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].value = num1 / num2;
}