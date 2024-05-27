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

/**
* Convierte un valor ingresado por el usuario en en grados o radianes
* @method convertirGradosRadianes
*/
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
/**
 * Permite sumar dos numero ingresados por el usuario
 * @method sumar
 */
let sumar = () =>{
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}
/**
 * Permite restar dos numero ingresados por el usuario
 * @method restar
 */
let restar = () =>{
    let num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}
/**
 * Permite multiplicar dos numero ingresados por el usuario
 * @method multiplicar
 */
let multiplicar = () =>{
    let num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}
/**
 * Permite dividir dos numero ingresados por el usuario
 * @method dividir
 */
let dividir = () =>{
    let num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
}
/**
 * Pasa de la primera pagina a la segunda
 * @method pasarPagina
 */
let pasarPagina = () =>{
    let cant, unid, urlComp;
    cant = document.getElementById("distancia").value;
    unid = document.getElementsByName("unidades")[0].value;

    console.log(cant);
    console.log(unid);
    urlComp = "segundaWeb.html#" + cant + "#" + unid;
    window.open(urlComp);
}
/**
 * Pasa los valores de la primera pagina a la segunda
 * @method cargarValores
 */
let cargarValores = () =>{
    let cantidad, unidad, urlCompleta;
    urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#");
    console.log(urlCompleta);
    cantidad = urlCompleta[1];
    unidad = urlCompleta[2];
    document.getElementById("dist").value = cantidad + " " + unidad;
}

/**
 * Permite guardar distancia y unidad en el localStorage
 * @method guardarLS
 */
function guardarLS(){
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementById("unidades").value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open("2.Web.html");
}

/**
 * Toma los valores de distacia y unidad del localStrage para mostrarlos en un input
 * @method cargarValores
 */
function cargarLS(){
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

function dibujarCirculoCuadrado(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const xMax = canvas.width;
    const yMax = canvas.height;
    ctx.fillStyle = "#ff0bb2";

    const lado = 100;
    const margen = 10;
    ctx.fillRect(0+margen, yMax-lado, lado, lado);

    ctx.arc(xMax/2, yMax/2, 50, 0, 2*Math.PI);
    ctx.fill();
}