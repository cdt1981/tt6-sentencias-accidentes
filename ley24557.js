var misMeses_24557;
var cadena_final_24557;
var posicion_24557;
var posicionAnterior_24557;
var cadena_fecha_24557;
var cadena_modificada_24557;

function convertToString_24557() {
    var prueba = new Date(document.getElementById("fechaAccidente").valueAsNumber); //
    var options = {
        month: "long",
        year: "numeric"
    };
    cadena_fecha_24557 = prueba.toLocaleDateString("es-ES", options);
    cadena_modificada_24557 = cadena_fecha_24557.replace(/ de /, " ");
    cadena_final_24557 = cadena_modificada_24557.toUpperCase();
    VIBM.mes = cadena_final_24557;
    return cadena_final_24557;
}

function pasaMeses24557() {

    misMeses_24557 = document.querySelectorAll(".month_24557");
    posicion_24557 = indiceRIPTE.findIndex(x => x === cadena_final_24557); //
    posicionAnterior_24557 = posicion_24557 - 24; //

    misMeses_24557.forEach(function (element) {

        var valorMes_24557 = indiceRIPTE[posicionAnterior_24557]; // 
        posicionAnterior_24557 = posicionAnterior_24557 + 2;

        element.innerHTML = valorMes_24557;
    });
    
    
}

function pasaMeses24557_quincena() {

    misMeses_24557_quincena = document.querySelectorAll(".month_24557_quincena");
    posicion_24557 = indiceRIPTE.findIndex(x => x === cadena_final_24557); //
    posicionAnterior_24557 = posicion_24557 - 24; //

    misMeses_24557_quincena.forEach(function (element) {

        var valorMes_24557 = indiceRIPTE[posicionAnterior_24557]; // 
        posicionAnterior_24557 = posicionAnterior_24557 + 2;

        element.innerHTML = valorMes_24557;
    });
}





const misRemun_24557 = document.getElementsByClassName("remun24557");
var miResultadoFinalArray_24557 = new Array();
var valor;
var resultado_24557;
var resultado_final_24557;

function sumaRemuneraciones_24557() {

    for (i = 0; i < misRemun_24557.length; i++) {
        valor = parseFloat(misRemun_24557.item(i).value);
        miResultadoFinalArray_24557.push(valor);
    }

    const reducer = (acumulado, valoractual) => acumulado + valoractual;
    resultado_24557 = miResultadoFinalArray_24557.reduce(reducer);
    

    document.getElementById("suma_24557").innerHTML = "La suma de las remuneraciones arroja un total de " + transformar(resultado_24557) + ".";
    $("#tr11").fadeIn(500, "swing");

    var facc_24557 = document.getElementById("fechaAccidente").valueAsNumber;
    var fini_24557 = document.getElementById("fechaInicioRL").valueAsNumber;
    var dif_24557 = ((facc_24557 - fini_24557) / 86400000);

    document.getElementById("divisor_24557").innerHTML = "La cantidad de días en el período trabajado es de " + dif_24557 + " días.";
    $("#tr12").fadeIn(600, "swing");

    resultado_final_24557 = ((resultado_24557 / dif_24557) * 30.4).toFixed(2);
    VIBM.ingresoBase = Number(resultado_final_24557.replace(/\,/g, "."));

    document.getElementById("resultado_24557").innerHTML = "El VIBM es de " + transformar(VIBM.ingresoBase) + ".";
    $("#tr13").fadeIn(700, "swing");

    document.getElementById("vibm").value = VIBM.ingresoBase;

    miResultadoFinalArray_24557.length = 0;

    

}

function muestra24557() {
    convertToString_24557();
    pasaMeses24557();
};



$(document).ready(function () {
    $("#sinRipte").click(muestra24557);
    $("#btnCalcular_24557").click(sumaRemuneraciones_24557);
    $(".remun24557").focus(function () {
        this.select();
    })
    $("#sinRipte_quincenal").on("click", function (){
                convertToString_24557();
                pasaMeses24557_quincena();
    });

});