/**
 * Convierte un valor ingresado por el usuario en metros, pie, pulgada o yarda
 * @method convertirUnidades
 * @param {string} nombre -id del elemento en html
 * @param {number} valor -valor ingresado por el usuario
 */
function convertirUnidades(nombre, valor){
    if (isNaN(valor)){
        alert("El valor ingresado no es un numero");
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    }else if (nombre=="metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = valor*3.28084;
        document.getElementById("yarda").value = valor*1.09361;
    }else if (nombre=="pulgada"){
        document.getElementById("metro").value = valor/39.37;
        document.getElementById("pie").value = valor/12;
        document.getElementById("yarda").value = valor/36;
    }else if (nombre=="pie"){
        document.getElementById("pulgada").value = valor/3;
        document.getElementById("metro").value = valor/3.281;
        document.getElementById("yarda").value = valor/3;
    }else if (nombre=="yarda"){
        document.getElementById("pulgada").value = valor*36;
        document.getElementById("pie").value = valor*3;
        document.getElementById("metro").value = valor/1.094;
    }
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