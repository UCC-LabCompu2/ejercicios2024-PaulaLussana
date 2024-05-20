/**
 * Convierte un valor ingresado por el usuario en metros, pie, pulgada o yarda
 * @method convertirUnidades
 * @param {string} nombre -id del elemento en html
 * @param {number} valor -valor ingresado por el usuario
 */
convertirUnidades = (nombre, valor) =>{
    let valMetro, valPulgada, valPie, valYarda;
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
    document.getElementById("metro").value = valMetro;
    document.getElementById("pulgada").value = valPulgada;
    document.getElementById("pie").value = valPie;
    document.getElementById("yarda").value = valYarda;
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