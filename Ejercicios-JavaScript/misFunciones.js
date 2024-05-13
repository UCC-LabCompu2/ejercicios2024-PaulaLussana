/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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