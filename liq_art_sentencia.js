//DECLARO VARIABLES Y CONST. GLOBALES
const mobileBreakpoint = window.matchMedia("(max-width: 991px )");
var calendario;
var monto;
var norma;
var ripte = document.getElementById("mostrarPisoMinimo");
var fa1;
var fa2;
var fa3;
var formula_objetc = new Object();
    formula_objetc.fecha_accidente = "";
    formula_objetc.fecha_inicioRL = "";
    formula_objetc.edad = "";
    formula_objetc.porcentaje = "";
    formula_objetc.piso_minimo = "";
    formula_objetc.vibm = "";
    formula_objetc.coef_edad = "";
    formula_objetc.ley_aplicable = "";
    formula_objetc.res_aplicable = "";
    formula_objetc.articuloTres = "";
    formula_objetc.total = "";
    formula_objetc.piso_aplicado = "";








//FUNCION QUE TRANSFORMA NUMERO EN MONEDA
function transformar(elemento) {

    // montoParaIBM = parseFloat(elemento).toFixed(2);
    // monto.toFixed(2);
    // alert(new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(number));
    var transformado = "$ " + new Intl.NumberFormat("de-DE").format(elemento);
    parseFloat(transformado).toFixed(2);

    return transformado;
} // FIN FUNCION TRANSFORMAR

function miFuncion() {

    formula_objetc.fecha_accidente = $("#fechaAccidente").val();
    formula_objetc.fecha_inicioRL = $("#fechaInicioRL").val();
    formula_objetc.edad = $("#edad").val();
    formula_objetc.coef_edad = (65 / formula_objetc.edad).toFixed(3);
    formula_objetc.porcentaje = $("#porcentaje").val();
    var edad = document.getElementById("mostrarCoeficienteEdad");   

    const coeficiente = parseFloat(65/ $("#edad").val()).toFixed(3);
    const valorEdad = $("#edad").val();

    edad.innerHTML = "<strong> 2.- </strong>" + "El coeficiente de edad del actor es de " + coeficiente +
    " (65/" + valorEdad + ").";

    formula_objetc.vibm = $("#vibm").val();
    // formula_objetc.vibm = VIBM.ingresoBase;

    document.getElementById("mostrarIBM").innerHTML = "<strong> 3.- </strong> El valor del I.B.M. asciende a la suma de " + transformar(formula_objetc.vibm) + ".";
    
    



    // INDICAR EN EL TEXTO DE LA SENTENCIA LOS VALORES CONSTANTES DEFINIDOS

}; // fin miFuncion //

function calcularPiso() {
    
    calendario = document.getElementById("fechaAccidente").valueAsNumber;
    
    // var porcInc = document.getElementById("porcentaje");
    

    
    if (calendario >= 1351209600000 && calendario <= 1640746800000) { // 


        if (calendario >= 1351209600000 && calendario <= 1362009600000) { //24/10/2012 al 28/02/2013//

            formula_objetc.res_aplicable = "Resol. 34/2013";
            formula_objetc.piso_minimo = 336630,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1362009600000 && calendario <= 1377907200000) { //01/03/2013 al 31/08/2013 //

            formula_objetc.res_aplicable = "Resol. 34/2013";
            formula_objetc.piso_minimo = 416943,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            
            
        }
        if (calendario > 1377907200000 && calendario <= 1393545600000) { //01/09/2013 al 28/02/2014//

            formula_objetc.res_aplicable = "Resol. 34/2013";
            formula_objetc.piso_minimo = 476649,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            
        }
        if (calendario > 1393545600000 && calendario <= 1409443200000) { // 01/03/2014 al 31/08/2014 //

            formula_objetc.res_aplicable = "Resol. 3/2014";
            formula_objetc.piso_minimo = 521883,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            
        }

        if (calendario > 1409443200000 && calendario <= 1425081600000) { // 01/09/2014 al 28/02/2015 //

            formula_objetc.res_aplicable = "Resol. 22/2014";
            formula_objetc.piso_minimo = 620414,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1425081600000 && calendario <= 1440979200000) { // 01/03/2015 al 31/08/2015 //

            formula_objetc.res_aplicable = "Resol. 6/2015";
            formula_objetc.piso_minimo = 713476,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1440979200000 && calendario <= 1456704000000) { // 01/09/2015 al 29/02/2016 // 

            formula_objetc.res_aplicable = "Resol. 28/2015";
            formula_objetc.piso_minimo = 841856,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1456704000000 && calendario <= 1472601600000) { // 01/03/2016 al 31/08/2016 //

            formula_objetc.piso_minimo = "Resol. 1/2016";
            formula_objetc.piso_minimo = 943119,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }
        if (calendario > 1472601600000 && calendario <= 1484784000000) { // 01/09/2016 al 19/01/2017 //

            formula_objetc.res_aplicable = "Resol. 387/2016";
            formula_objetc.piso_minimo = 1090945,00;
            formula_objetc.ley_aplicable = "ley 24.557 y ley 26.773";
            mostrar(norma, monto);
            

        }

        if (calendario > 1484784000000 && calendario <= 1487116800000) { // 20/01/2017 al 15/02/2017 //

            formula_objetc.res_aplicable = "Resol. 387/2016";
            formula_objetc.piso_minimo = 1090945,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y DNU 54/2017";
            mostrar(norma, monto);
            

        }

        if (calendario > 1487116800000 && calendario <= 1488240000000) { // 20/01/2017 al 28/02/2017 //

            formula_objetc.res_aplicable = "Resol. 387/2016";
            formula_objetc.piso_minimo = 1090945,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }


        if (calendario > 1488240000000 && calendario <= 1504137600000) { // 01/03/2017 al 31/08/2017 //

            formula_objetc.res_aplicable = "Resol. Nota SCE 5649/2017";
            formula_objetc.piso_minimo = 1234944,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1504137600000 && calendario <= 1519776000000) { // 01/09/2017 al 28/02/2018 //

            formula_objetc.res_aplicable = "Resol. Nota SCE 21161/2017";
            formula_objetc.piso_minimo = 1400864,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1519776000000 && calendario <= 1535673600000) { // 01/03/2018 al 31/08/2018 //

            formula_objetc.res_aplicable = "Resol. Nota SCE 6026/2018";
            formula_objetc.piso_minimo = 1569865,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1535673600000 && calendario <= 1551312000000) { // 01/09/2018 al 28/02/2019 //

            formula_objetc.res_aplicable = "Resol. Nota GCP 18437/2018";
            formula_objetc.piso_minimo = 1766636,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1551312000000 && calendario <= 1567209600000) { // 01/03/2019 al 31/08/2019 //

            formula_objetc.res_aplicable = "Resol. Nota GCP 2727/2019";
            formula_objetc.piso_minimo = 2049647,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1567209600000 && calendario <= 1582934400000) { // 01/09/2019 al 28/02/2020 //

            formula_objetc.res_aplicable = "Resol. Nota SCE 76715123/2019";
            formula_objetc.piso_minimo = 2482061,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1582934400000 && calendario <= 1598832000000) { // 01/03/2020 al 31/08/2020

            formula_objetc.res_aplicable = "Resol. SRT 24/2020";
            formula_objetc.piso_minimo = 2958970,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            

        }
        if (calendario > 1598929200000 && calendario <= 1614481200000) { // 01/09/2020 al 28/02/2021 

            formula_objetc.res_aplicable = "Resol. SRT 70/2020";
            formula_objetc.piso_minimo = 3483482,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            
        }
        if (calendario > 1614481200000 && calendario <= 1630378800000) { // 01/03/2021 al 31/08/2021 

            formula_objetc.res_aplicable = "Resol. SRT 7/2021";
            formula_objetc.piso_minimo = 3991300,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            
        }
        if (calendario > 1630378800000 && calendario <= 1646017200000) { // 01/09/2021 al 28/02/2022 

            formula_objetc.res_aplicable = "Resol. SRT 49/2021";
            formula_objetc.piso_minimo = 5044408,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            
        }
        if (calendario > 1646017200000 && calendario <= 1661914800000) { // 01/03/2022 al 31/08/2022 

            formula_objetc.res_aplicable = "Resol. SRT 15/2022";
            formula_objetc.piso_minimo = 6123338,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            
        }
        if (calendario > 1661914800000 && calendario <= 1677553200000) { // 01/09/2022 al 28/02/2023 

            formula_objetc.res_aplicable = "Resol. SRT 51/2022";
            formula_objetc.piso_minimo = 8433218,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            
        }
        if (calendario > 1677553200000 && calendario <= 1693450800000) { // 01/03/2023 al 31/08/2023 

            formula_objetc.res_aplicable = "Resol. SRT 12/2023";
            formula_objetc.piso_minimo = 11589837,00;
            formula_objetc.ley_aplicable = "ley 24.557, ley 26.773 y ley 27.348";
            mostrar(norma, monto);
            
        }



    } else if (calendario >= 810950400000  && calendario < 977961600000) { // 13/09/1995 al 27/12/2000
    formula_objetc.ley_aplicable = "ley 24.557";
    
    } else if (calendario >=  977961600000 && calendario < 1257292800000) { // 28/12/2000 al 4/11/2009
    formula_objetc.ley_aplicable = "ley 24.557, Decreto 1278/00";
    
    } else if (calendario >=  1257379200000 && calendario < 1351036800000) { // 5/11/2009 al 24/10/12
    formula_objetc.ley_aplicable = "ley 24.557, Decreto 1694/09";
    
    }

    deshabilitar();
    
}



function mostrar(norma, monto) {
    
    monto = formula_objetc.piso_minimo;
    norma = formula_objetc.res_aplicable;

    monto_adecuado = (monto * formula_objetc.porcentaje) * 100;
    document.getElementById("mostrarPisoMinimo").innerHTML = "<strong> 1.- </strong>" + "El piso mínimo para la fecha seleccionada es de " +
    transformar((monto * formula_objetc.porcentaje) / 100) + " conforme " + norma + " (" + transformar(monto) +
    " x " + formula_objetc.porcentaje + " %).";

    document.getElementById("mostrarLeyAplicable").innerHTML = "<strong> Ley aplicable: </strong>" + formula_objetc.ley_aplicable;

}

function deshabilitar() {
    if (calendario >= 810950400000 && calendario <= 1484784000000){ //13/9/95 al 19/1/17
        $("#sinRipte").attr("disabled", false); 
        $("#sinRipte_quincenal").attr("disabled", false); 
        $("#conRipte").attr("disabled", true); 
        $("#conRipte_quincenal").attr("disabled", true); 
    }
    if (calendario > 1484784000000){
        $("#conRipte").attr("disabled", false); 
        $("#conRipte_quincenal").attr("disabled", false); 
        $("#sinRipte").attr("disabled", true); 
        $("#sinRipte_quincenal").attr("disabled", true); 
    }
}


function bloquearText() {
    var text = document.getElementById("edad");
    var fechaNac = document.getElementById("fechaNacimiento");
    /* función que permite habilitar o deshabilitar un input text para escribir, se puede reemplazar
    con jquery por la función toggle (si mal no me acuerdo)*/
    text.value = "";
    text.disabled = true;
    fechaNac.disabled = false;
} // fin función bloqueartext //

function desbloquearText() {
    var text = document.getElementById("edad");
    var fechaNac = document.getElementById("fechaNacimiento");

    text.disabled = false;
    fechaNac.value = "";
    fechaNac.disabled = true;

} // fin función desbloquear //

function calculoFecha() {
    var text = document.getElementById("edad");
    // var fechaNac = document.getElementById("fechaNacimiento");

    var fa = document.getElementById("fechaAccidente").valueAsNumber;
    var fn = document.getElementById("fechaNacimiento").valueAsNumber;
    var dif = ((fa - fn) / 86400000) / 365.242189;
    text.value = parseInt(dif);

    formula_objetc.fecha_inicioRL = document.getElementById("fechaInicioRL").valueAsNumber;
} // fin función calculofecha //

function formula_LRT(coeficiente, incapacidad, ingBase) {

    coeficiente = formula_objetc.coef_edad;
    incapacidad = formula_objetc.porcentaje / 100;
    ingBase = formula_objetc.vibm;
    
    // var str = String(ingBase);
    //     str = str.replace(/[$.\s]/g, "");
    //     str = str.replace(/[,]/g, ".");

    // var num = Number(str);
    // console.log(num);
    
    // ingBase = parseFloat(num);
    // console.log(num);

    formula_objetc.total = (53 * coeficiente * incapacidad * ingBase).toFixed(2);

    document.getElementById("mostrarFormula").innerHTML = "<strong> FORMULA ART. 14 LEY 24.557 : </strong> 53 x " + coeficiente + " x " +
    transformar(formula_objetc.vibm) + " x " + incapacidad + " = " + transformar(formula_objetc.total) +".";

    if(calendario =>  1351209600000){ //24/10/2012
        formula_objetc.articuloTres = (formula_objetc.total * .20).toFixed(2);
        document.getElementById("mostrarArticulotres").innerHTML = "<strong> ART. 3 LEY 26.773 : </strong> " + transformar(formula_objetc.total) + " x 20 % = " +
        transformar(formula_objetc.articuloTres) + ".";
        $("#mostrarArticulotres").fadeIn(1000, "swing");
    } else{
        formula_objetc.articuloTres = 0;
    }

    var total = (parseFloat(formula_objetc.total) + parseFloat(formula_objetc.articuloTres)).toFixed(2);

    document.getElementById("mostrarTotal").innerHTML = "<strong> TOTAL : </strong> " + transformar(total) + ".";
    $("#mostrarTotal").fadeIn(1000, "swing");

    formula_objetc.piso_aplicado = parseFloat((formula_objetc.piso_minimo * formula_objetc.porcentaje)/100).toFixed(2);
    
    let numeroCausa = document.getElementById("numeroCausa").value;
    let nombreActor = document.getElementById("nombreActor").value;
    let abogadoActor = document.getElementById("abogadoActor").value;
    let demandada = document.getElementById("demandada").value;
    let abogadoDemandada = document.getElementById("abogadoDemandada").value;
    let empleador = document.getElementById("empleador").value;
    let contratoAfiliacion = document.getElementById("contratoAfiliacion").value;
    let tercerJuez = document.getElementById("tercerJuez").value;
    let incFisica = $("#incFisica").val();
    let incPsicologica = $("#incPsicol").val();
        
    const fechaAccidente = (date) => {
        let _date = new Date(date);
        const day = _date.getUTCDate().toString();
        switch (_date.getMonth()) {
            case 0:
                month = "enero";
                break;
            case 1:
                month = "febrero";
                break;
            case 2:
                month = "marzo";
                break;
            case 3:
                month = "abril";
                break;
            case 4:
                month = "mayo";
                break;
            case 5:
                month = "junio";
                break;
            case 6:
                month = "julio";
                break;
            case 7:
                month = "agosto";
                break;
            case 8:
                month = "septiembre";
                break;
            case 9:
                month = "octubre";
                break;
            case 10:
                month = "noviembre";
                break;
            case 11:
                month = "diciembre";
                break;
            
        };
        const year = _date.getFullYear().toString();

        return `${day} de ${month} de ${year}`;
    };

    let edad = document.getElementById("edad").value;
    
    document.getElementById("mostrarSentencia").innerHTML = 

        `
        INTEGRA ${tercerJuez}<br/>

${numeroCausa} – ${nombreActor} C ${demandada} S/ ACCIDENTE<br/>

<span class="titulo">V E R E D I C T O</span> <br/>

<span class="titulo"> C U E S T I O N E S </span> <br/>

I.- Cuáles son los hechos reconocidos por las partes en los presentes autos? <br/>
II.- Cuáles son los hechos que corresponde tener por probados por las partes en los presentes autos? <br/>
III.- Cuáles son los hechos que corresponde tener por no probados en los presentes autos? <br/>

<span class="titulo">V O T A C I O N </span> <br/>

	A la primera cuestión planteada, de acuerdo al contenido del escrito de demanda de fs. 12/49, la contestación al mismo de fs. 64/90, la respuesta al traslado conferido en los términos del art. 29 de la ley 11.653 de fs. 93/95 y las restantes probanzas producidas en autos, el Dr. De Cillis, dijo: <br/>
    <br/>
	<span class="titulo"> I.- HECHOS RECONOCIDOS: </span><br/>
	1.- Que entre ${demandada} y el empleador de la parte actora – ${empleador} -, existió un contrato de afiliación registrado bajo el Nº ${contratoAfiliacion} el cual se encontraba vigente al momento del infortunio denunciado.<br/>
	2.- Que ${demandada} recibió la corresponde denuncia del accidente relatado y que la misma otorgó las prestaciones médicas correspondientes.<br/>
	3.- La existencia de una relación laboral habida entre la actora y ${empleador}, ello en virtud del implícito reconocimiento efectuado por la propia demandada al contestar demanda, donde reconoce haber celebrado un contrato de afiliación con la empleadora, a lo que se aduna la documentación emitida por AFIP y acompañada en autos con fecha.<br/>
(arts. 354 inc. 1°, 375, 34 inc. 4° CPCC; arts. 28, 29 y 63 ley 11.653).<br/>
<br/>
	Lo expuesto es el resultado de la apreciación objetiva y en conciencia de la prueba producida y demás constancias de autos que informan mi íntima convicción (art. 44 inc. “d” de la ley 11.653).<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	A la misma cuestión, el Dr. Gabriel Alberto Dos Santos dijo:<br/>
	Que adhiero al voto del Dr. De Cillis por análogos fundamentos y conclusiones.<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	A la misma cuestión, el Dr. ${tercerJuez} dijo:<br/>
	Que...<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	<span class="negrita">A la segunda cuestión planteada, el Dr. De Cillis dijo:</span><br/>
	<br/>
	<span class="titulo">II.- CONSIDERO PROBADO:</span><br/>
	1.- Que, con fecha ${fechaAccidente(document.getElementById("fechaAccidente").valueAsNumber)}, la parte actora sufrió un accidente de trabajo, ello toda vez que la Aseguradora procedió  a otorgar las prestaciones médicas correspondientes sin formular el rechazo expreso del accidente denunciado, lo que importó el reconocimiento de la responsabilidad legal  de carácter laboral del mismo, ello en virtud de lo dispuesto por el art. 1 del Decreto 1475/2015 y  lo resuelto por el Superior en autos “Barragán Norma c/ Provincia ART S.A. s/ accidente in itinere”, SCBA  L. 118.075, S 9/12/15.<br/>
	2.- Que, a raíz del siniestro reclamado, el actor presenta , lo que le ha provocado una incapacidad física, parcial y permanente, del ${incFisica} % de la T.O., incluidos los factores de ponderación.<br/>
	Asimismo, entiendo que el actor padece una R.V.A.N. de grado II que le provocó una incapacidad psicológica del ${incPsicologica} %.<br/>
	En consecuencia, por aplicación del principio de la capacidad restante, entiendo que el actor resulta poseedor de una incapacidad parcial y permanente del ${incapacidad *100} % de la T.O., ello de conformidad con lo informado por la perito médico designada en autos.<br/>
	Sobre el particular cabe destacar que, luego de haber leído y analizado las impugnaciones efectuadas al informe pericial médico, considero que el informe presentado adquiere verdadera fuerza probatoria por resultar el mismo científicamente fundado por un galeno competente para ello (cf. art. 474 del CPCC).<br/>
	3.- Que el promedio de las doce últimas remuneraciones percibidas por el accionante con anterioridad a la fecha del accidente – VIBM – alcanzó la suma de $ ${ingBase}, ello de conformidad con lo informado por la AFIP.<br/>
	4.- Que, al momento de la primera manifestación invalidante, al trabajadora tenía ${edad} años de edad, de conformidad con la documentación acompañada junto con el escrito de inicio de demanda.<br/>
(arts. 354 inc. 1°, 375, 34 inc. 4° CPCC; arts. 28, 29, 39 y 63 ley 11.653).<br/>
<br/>
	Lo expuesto es el resultado de la apreciación objetiva y en conciencia de la prueba producida y demás constancias de autos que informan mi íntima convicción (art. 44 inc. “d” de la ley 11.653).<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	A la misma cuestión, el Dr. Gabriel Alberto Dos Santos dijo:<br/>
	Que adhiero al voto del Dr. De Cillis por análogos fundamentos y conclusiones.<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	A la misma cuestión, el Dr. ${tercerJuez} dijo:<br/>
	Que...<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>

	<span class="negrita">A la tercera cuestión planteada, el Dr. De Cillis, dijo:</span><br/>
    <br/>
	<span class="titulo">III.- NO CONSIDERO PROBADO:</span><br/>
	1.- Que la parte actora haya percibido suma alguna por los reclamos efectuados, ello toda vez que no existen en autos elementos probatorios que así lo demuestren, habiendo omitido la Aseguradora probar en su favor.<br/>
 (arts. 354, 375, 34 inc. 4° CPCC; arts. 28, 29 y 63 ley 11.653)<br/>
 <br/>
	Lo expuesto es el resultado de la apreciación objetiva y en conciencia de la prueba producida y demás constancias de autos que informan mi íntima convicción (art. 44 inc. “d” de la ley 11.653).<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	A la misma cuestión, el Dr. Gabriel Alberto Dos Santos dijo:<br/>
	Que adhiero al voto del Dr. De Cillis por análogos fundamentos y conclusiones.<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>

		A la misma cuestión, el Dr. ${tercerJuez} dijo:<br/>
	Que...<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
<br/>
	Con lo que terminó el Acuerdo, firmando los Sres. Jueces por ante mí, que doy fe.<br/>
<br/>
<span class="negrita"> A C U E R D O </span><br/>
<br/>
<span class="negrita"> C U E S T I O N E S </span><br/>
<br/>
	<span class="negrita"> Primera cuestión: </span>Es procedente la demanda instaurada?<br/>
    <br/>
	<stribg> Segunda cuestión: </span> Que pronunciamiento corresponde dictar?<br/>
    <br/>

    <span class="negrita"> V O T A C I O N </span><br/>
    <br/>
	A la primera cuestión planteada, el Dr. De Cillis, dijo:<br/>

    <span class="titulo"> I) LOS ANTECEDENTES: </span><br/>
	A fs. 12/49 se presentó en autos la Dra. ${abogadoActor}, en su carácter de letrada apoderada del Sr. ${nombreActor}, a iniciar demanda contra ${demandada} por la suma de $ 632.820,98.<br/>
	Efectuó una serie de consideraciones relacionadas con la competencia de éste Tribunal para entender en el trámite de las presentes actuaciones, todo lo cual he leído y tengo presente.<br/>
	Indicó que su representado ingresó a prestar tareas para ${empleador} con fecha 1 de septiembre de 2012, desarrollando tareas de vigilador general y percibiendo por ellas una remuneración mensual de $ 10.682,00.<br/>
	Relató que, con fecha ${fechaAccidente(document.getElementById("fechaAccidente").valueAsNumber)}, sufrió un accidente de trabajo en oportunidad de dirigirse desde su domicilio particular hacia el lugar donde debía prestar tareas (el cual había sido asignado por su empleador para esa fecha). Sostuvo que fue interceptado y asaltado por cuatro personas, las cuales lo golpearon fuertemente en el rostro, cabeza y columna, sufriendo lesiones de gravedad.<br/>
	Efectuada la denuncia a la Aseguradora, la misma otorgó prestaciones en el “Centro Médico Ramos Mejía” donde se le practicaron las primeras curaciones y se le diagnosticó traumatismo cerebral, reconstrucción de tabique nasal, traumatismo y hematoma ojo izquierdo y traumatismo de columna tracolumbar. Por el traumatismo del tabique nasal debió ser intervenido quirúrgicamente el 22 de agosto de 2017 en el “Sanatorio Dupuytren”.<br/>
	Manifestó que con fecha 18 de septiembre de 2017, pese a continuar con dificultades respiratorias, la Aseguradora le otorgó el alta médica.<br/>
	Estimó padecer una incapacidad física que gira en torno al 30 % de la T.O. y una incapacidad psicológica del 10 %.<br/>
	Practicó liquidación e imputó responsabilidad a la accionada en los términos de la ley 24.557.<br/>
	Solicitó la declaración de inconstitucionalidad de los arts. 8, 21, 22 y 46 de la ley 24.557; de los arts. 3 y 4 ap. 1 de la ley 26.773; del Decreto 54/2017; de los arts. 1 y 8 de la ley 24.432; del art. 17 del Decreto 472/14.<br/>
	Finalmente ofreció pruebas, fundó en derecho la acción entablada y peticionó se haga lugar a la demanda instaurada con expresa imposición de costas a la contraria.<br/>
	El traslado de demanda se dispuso a fs. 51, encontrándose el mismo debidamente notificado con fecha 23 de octubre de 2017.<br/>
	A fs. 64/90 se presentó en autos la Dra. ${abogadoDemandada}, en su carácter de letrada apoderada de ${demandada}, a contestar la demanda instaurada.<br/>
	Reconoció la existencia de un contrato de afiliación celebrado con la empleadora del accionante – ${empleador} -, vigente al momento de ocurrido el evento dañoso y registrado bajo el Nº ${contratoAfiliacion}. <br/>
	Opuso excepción de falta de acción por no haber agotado el trabajador la instancia administrativa previa, con fundamento en el art. 21 de la ley 24.557.<br/>
	Reconoció haber recibido la denuncia del siniestro como así también haber otorgado prestaciones médicas hasta el alta médica de fecha 18 de septiembre de 2017.<br/>
	Negó los hechos introducidos por el accionante, impugnó liquidación y contestó los planteos de inconstitucionalidad formulados por la parte actora, todo lo cual he leído y tengo presente.<br/>
	Por último efectuó ofreció pruebas y peticionó se rechace la demanda instaurada en su contra con expresa imposición de costas a la contraria.<br/>
	A fs. 93/95 la actora respondió el traslado conferido en los términos del art. 29 de la ley 11,653.<br/>
	El auto de apertura a prueba se dictó a fs. 96.<br/>
	La prueba informativa se produce de la siguiente forma: a fs. 111/116 la respuesta brindada por el Centro Médico Fleming y a fs. 122/124 por el Dr. Menza.<br/>
	Con fecha 9 de octubre y 25 de octubre de 2019 las partes actora y demandada, respectivamente, se expidieron respecto de las disposiciones contenidas en el DNU N.º 669/19.<br/>
	El informe pericial médico se presentó con fecha 17 de abril de 2020, siendo el mismo impugnado por las partes demanda y actora con fechas 29 de abril de 2020 y 9 de mayo de 2020, respectivamente. Asimismo, con fecha 6 de agosto de 2020 la perito respondió a las impugnaciones formuladas a su informe rectificando el mismo respecto de las conclusiones médico legales.<br/>
	Con fecha 19 de agosto de 2020 la parte actora acompañó en autos la planilla de remuneraciones emitida por la AFIP.<br/>
	La audiencia de Vista de Causa se celebró con fecha 21 de marzo de 2021. A la misma comparecieron ambas partes las cuales desistieron de sus pruebas pendientes de producción y solicitaron se les otorgue el plazo de cinco días a fin de que las mismas se expidan sobre el mérito de las pruebas producidas en autos.<br/>
	Con fecha 25 de marzo de 2021 se designó al Dr. Carlos Alberto Stortini para integrar el Tribunal en las presentes actuaciones.<br/>
	Con fecha 31 de marzo de 2022 la parte actora presentó su alegato.<br/>
	Finalmente, con fecha 3 de mayo de 2022, pasan los autos al Acuerdo.<br/>
	<br/>
	<span class="titulo"> II)LOS HECHOS: </span><br/>
	El Tribunal dictó el Veredicto, señalando las circunstancias fácticas a las que habré de referirme a los efectos de la aplicación del derecho.<br/>
    <br/>
	<span class="titulo"> III)LAS PRETENSIONES FRENTE AL DERECHO: </span><br/>
	Corresponde me expida, en primer lugar, en relación a los planteos de inconstitucionalidad efectuados por la accionante.<br/>
	<br/>
    <br/>
    COLOCAR INCONSTITUCIONALIDADES
    <br/>
    <br/>

	<span class="titulo"> LIQUIDACION: </span><br/>
	En virtud de lo expuesto, ha quedado probado en el Veredicto que antecede al presente acuerdo que la Aseguradora ha recibido la denuncia del accidente y otorgado las prestaciones médicas correspondientes, por tanto ${demandada} está obligada al pago de las prestaciones dinerarias del daño derivado del accidente laboral sufrido por el actor, por cuanto su acaecimiento ha quedado acreditado en autos, conforme el art. 14, apartado 2, inc. a, de la ley 24.557, motivo por el cual tendrá acogida favorable la indemnización prevista en dicha normativa. <br/>
    <br/>
    En consecuencia, dado el carácter definitivo de la IPP (incapacidad permanente parcial) igual o inferior al 50 %, el damnificado percibirá una indemnización de pago único, cuya fórmula de pago es: VMIB (valor mensual de ingreso base determinado por el art. 12) x 53 x CE (coeficiente de edad que resulta de dividir 65 por la edad del actor a la fecha de la primera manifestación invalidante) sobre % (porcentaje de incapacidad), habiéndose fijado un piso mínimo que resulta de multiplicar ${transformar(formula_objetc.piso_minimo)} por el porcentaje de incapacidad (${formula_objetc.porcentaje} %), ello de conformidad con la normativa vigente a la fecha de acaecido el daño (${formula_objetc.ley_aplicable} y ${formula_objetc.res_aplicable}).<br/>
    A tal fin, el cálculo se efectuará conforme la incapacidad establecida por el perito médico determinada en un ${formula_objetc.porcentaje} %, sobre un ingreso base mensual de ${transformar(formula_objetc.vibm)}.<br/>
    En consecuencia, y de conformidad con lo resuelto en la primera cuestión, surge que la regla de aplicación vigente al momento de la primera manifestación invalidante es la establecida por el art. 14, inc. 2, ap. “a” de la ${formula_objetc.ley_aplicable}.<br/>
    Por lo expuesto, dada la edad del actor al momento de la primera manifestación invalidante (${formula_objetc.edad} años), la fórmula establecida por la normativa de referencia arroja la siguiente suma: 53 x ${parseFloat(formula_objetc.coef_edad).toFixed(2)} (65/${formula_objetc.edad}) x ${transformar(formula_objetc.vibm)} x ${formula_objetc.porcentaje} % = ${transformar(formula_objetc.total)}, resultado que se encuentra por encima del mínimo legal establecido por la ${formula_objetc.res_aplicable} (${transformar(formula_objetc.piso_minimo)} x ${formula_objetc.porcentaje} % = ${transformar(formula_objetc.piso_aplicado)}).<br/>
    Asimismo, dicho monto se verá incrementado en un 20 % de conformidad con lo dispuesto por el art. 3 de la ley 26.773, arrojando el mismo la suma de ${transformar(formula_objetc.articuloTres)} ( ${transformar(formula_objetc.total)} x 20%).<br/>
    En consecuencia, la indemnización derivada de la incapacidad que detenta el accionante, a la cual éste es acreedor y por la cual debe responder la accionada asciende a la suma de ${transformar(total)}.<br/>
    <br/>
	ALE: NO HAY SESIONES RECLAMADAS.<br/>
    <br/>
	Asimismo, desde la fecha de la primera manifestación invalidante y hasta el momento de la liquidación que se practique por Secretaría, el ingreso base devengará un interés equivalente al promedio de la tasa activa cartera general nominal anual vencida a treinta (30) días del Banco de la Nación Argentina (art. 12, inc. 2° de la ley 24.557, mod. por el art. 11 de la ley 27.348).<br/>
	A su vez, y en virtud de lo dispuesto por el Art. 770, inc. "b", C.C y C.N., deberá hacerse efectiva la acumulación de los intereses generados desde la fecha en que cada suma es debida y hasta la fecha en que se notificó el traslado de la demanda incoada.<br/>
	Luego, a partir de la mora en el pago de la indemnización será de aplicación lo establecido por el artículo 770 del Código Civil y Comercial acumulándose los intereses al capital, y el producido devengará un interés equivalente al promedio de la tasa activa cartera general nominal anual vencida a treinta (30) días del Banco de la Nación Argentina, hasta la efectiva cancelación (art. 12, inc. 3° de la ley 24.557, mod. por el art. 11 de la ley 27.348).<br/>
	El importe resultante deberá ser depositado en el Banco de la Provincia de Buenos Aires, Sucursal Tribunales de San Isidro a la orden del Tribunal y como perteneciente a estos autos, todo ello en el plazo de diez días de notificada la presente.<br/>
	Fundo mi voto en los arts. 14 bis, 16, 17, 19, 28, 75 inc. 22 y conc. de la C.N.; arts. 1, 5 y 24 de la Convención Americana sobre Derechos Humanos; arts. 1, 2, 7 y conc. de la Declaración Universal de Derechos Humanos; ley 24.557; dec. 1694/09; ley 26.773; ${formula_objetc.res_aplicable}; ley 27.348;  arts. 26, 28, 29, 35, 36, 37, 38, 41, 44, 63 y conc. de la ley 11.653; arts. 330, 354, 375, 409 y conc. del CPCC. y demás fundamentos expuestos en la cuestión que antecede.<br/>
	Por los fundamentos expuestos,<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	<span class="negrita"> A la misma cuestión, el Dr. Gabriel A. Dos Santos dijo: </span><br/>
	Adhiero al voto emitido por el colega preopinante por análogos fundamentos, sin embargo, reitero los fundamentos expuestos en casos análogos en lo relativo a la no aplicación del Decreto de necesidad y urgencia 669/19, publicado en el B.O. con fecha 30.9.19, como así también en lo relativo a la excepción prevista en el art. 770.inc. b) CCyCN.<br/>
	a) Es dable señalar que el DNU 669/19 entro en vigencia encontrándose en trámite el juicio de autos.  <br/>
	La naturaleza legislativa de los Decreto de Necesidad y Urgencia la que ha sido mayoritariamente admitida por los autores y por algunos textos constitucionales. <br/>
	En efecto, esta aceptado que si bien no surge la norma del Poder Legislativo, tiene caracteres de ley en cuanto tiene fuerza de ley, alcance general, deroga o modifica leyes, implica el ejercicio de facultades de naturaleza legislativa. Esta postura adquiere seriedad si se respeta la norma constitucional de exigir, como condición indispensable la legitimidad, la convalidación expresa del decreto por parte del Poder Legislativo (Pérez, Hualde, Alejandro. Decretos de necesidad y urgencia, límites y control, ed. Depalma, Buenos Aires, 1995, p.138).<br/>
	A mi entender, la cuestión que puede suscitarse es con motivo de la aplicación de una nueva legislación a las relaciones jurídicas nacidas bajo el amparo de otra normativa jurídica vigente al momento de la entrada del nuevo régimen.<br/>
	En este sentido, el artículo 7 del Código Civil y Comercial de la Nación  (vigente a la fecha del evento dañoso), hace referencia a los conceptos de relación y situación jurídica. <br/>
	En lo respecta al concepto de  relación Jurídica se entiende que es aquella que se establece entre dos o más personas, con un carácter peculiar y particular, esencialmente variable, las más frecuentes son las que nacen de la voluntad de las partes. Ejemplos más comunes son los contratos y los testamentos. Aún las nacidas de la ley (como la obligación de reparar los daños derivados de un accidente de trabajo).  La relación jurídica desaparece con el ejercicio del derecho y el cumplimiento de la obligación. Las consecuencias de tal relación jurídica, son las derivaciones de hecho que reconocen su causa eficiente en aquellos antecedentes. <br/>
	El artículo de referencia, consagra en su primer párrafo, que: “A partir de su entrada en vigencia, las leyes se aplican  a las consecuencias de las relaciones y situaciones jurídicas existentes..." El efecto inmediato de la nueva legislación es cuando modifica, acrece o disminuye los efectos en curso de las relaciones o situaciones jurídicas existentes. El precepto sienta la regla primaria que a partir de su entrada en vigencia las leyes deben aplicarse con la máxima extensión posible. No sólo a los hechos y relaciones futuras sino también a los que hayan nacidos al amparo de la anterior ley y se encuentran en plena vigencia al dictarse la nueva legislación o sea que rige para los hechos que están in fieri, en curso de desarrollo, al tiempo de su sanción. <br/>
	Esto no implica retroactividad de la norma porque lo que modifica o cambia son únicamente los efectos futuros de las relaciones pasadas. De ahí que solo pase a regir los tramos de su desarrollo aún no cumplidos, en tanto que a los cumplidos se los considera regidos por la ley vigente al momento en que tuvieron lugar, pero no para las consecuencias ya consumadas de los hechos pasados, que quedan sujetos a la ley anterior (en el caso de autos, por la ley 24557. mod. por las leyes 26.773 y 27.348), pues juega la noción de consumo jurídico.<br/>
	En cuanto a las consecuencias de tales relaciones jurídicas, se refiere a las derivaciones fácticas de las mismas. Tales consecuencias aún no ocurridas al tiempo de dictarse la nueva ley, quedan bajo el amparo de la nueva legislación. No incluye a las derivaciones jurídicas que la nueva ley puede atribuir a hechos pasados al tiempo de la sanción de la nueva ley. <br/>
	En el caso de autos (accidente de trabajo) lo determinante será la fecha de ocurrencia del hecho dañoso (julio de 2017), porque es lo que fija la clase de la responsabilidad y su extensión. En estos casos de hechos instantáneos, es decir: que duran solo un momento, su consecuencia no puede caer más que bajo el amparo de la ley vigente al momento en que ellos ocurren. <br/>
	Que la sentencia a dictarse en  el caso de autos, donde se reclama  la reparación de daños derivado de un accidente de trabajo  no crea un derecho nuevo sino que el juzgador se limita a reconocer la existencia de un derecho anterior controvertido, precisando su alcance y monto. De allí la importancia de considerar este punto, de si la sentencia es constitutiva o declarativa de un derecho, ya que en el primer caso  debe aplicarse la ley que rige al momento del dictado de la sentencia, en cambio sí solamente declara o reconoce un derecho debe regirse por la ley del suceso o del hecho que origina tal derecho. <br/>
	Como fuera dicho, en el caso concreto el actor inicia su demanda en fecha 4/10/2017 reclamando una indemnización por un accidente de fecha 24/07/2017, por lo que resulta aplicable la ley 24.557, modificada por las leyes 26.773 y 27.348 (BO. 24.2.2107). <br/>
	A su turno, de la lectura de los considerandos del Decreto 669/19, surge que: “ la modalidad de ajuste, implementada por la Ley N° 27.348, complementaria de la Ley N° 24.557 y sus modificaciones, tuvo la finalidad de incluir una tasa de actualización que evite que los efectos de procesos inflacionarios afecten desfavorablemente la cuantía del monto del Ingreso Base". Luego de un análisis del rendimiento financiero de los activos de la industria aseguradora se concluyó en la configuración de la existencia de un desequilibrio sistémico  “el mantenimiento del esquema actual provocaría un inminente desfinanciamiento del sistema con impacto en la solvencia de las Aseguradoras y, en definitiva, en los trabajadores, beneficiarios del Sistema de la Seguridad Social..."<br/>
	De manera que la atribución de la finalidad de la norma, de reciente sanción, está dada por la extensa exposición de motivos donde se explicitan detalladamente los objetivos de la ley en cuestión (DNU 669/19), lo que se constituye en una importante pauta interpretativa. <br/>
	Por lo tanto, considero que la repotenciación del IBM (cf. DNU 669/19), se aplica a los casos que se incluyan en la Ley n° 27.348, en tanto está prevista para aquellos eventos ocurridos, cuya primera manifestación invalidante fuere posterior a su vigencia (art. 20). <br/>
	Ahora bien, la constitución dispone claramente como principio la prohibición del Ejecutivo de dictar normas de contenido legislativo. Dice el texto constitucional en su artículo 99, inc. 3 que el “Poder Ejecutivo no podrá en ningún caso bajo pena de nulidad absoluta e insalvable, emitir disposiciones de carácter legislativo". Este precepto coincide sustancialmente con el concepto que establece el art. 76 de la Constitución en tanto prohíbe la delegación legislativa en el Ejecutivo. Aun así, el convencional, más allá del principio básico de prohibición, establece excepciones. Este camino de excepción solo es posible cuando existen circunstancias que hagan imposible seguir los trámites ordinarios previstos por la Constitución para la sanción de las leyes y además concurran razones de necesidad y urgencia. <br/>
	En efecto, el Poder Ejecutivo nacional conforme sus facultades legislativas (art. 99, inc. 3, CN) puede recurrir al dictado de decretos de necesidad y urgencia, en casos de crisis políticas, sociales o económicas, siendo los hechos habilitantes del Ejecutivo la imposibilidad material de convocar y reunir al Congreso, o situaciones urgentes que requieren una solución normativa de carácter inmediato que hace imposible seguir el trámite ordinario para la formación de la ley. <br/>
	En este orden de ideas puede inscribirse el caso "Peralta" (sent. del 27-XII-1990) dictado por la Corte Suprema federal, donde echando mano a la doctrina de la emergencia se justifica una amplia capacidad del Poder Ejecutivo para legislar a través de los reglamentos de necesidad y urgencia, doctrina esta con origen en el "derecho de la revolución triunfante" que se trasladara del orden político a lo económico. Pero esta línea doctrinaria, ha sido abandonada a raíz de la reforma constitucional del año 1994 por la limitación del art. 99 inc 3 de la Constitución nacional y en virtud de lo decidido en el caso "Verrochi", (sent. del 19-VIII-1999; Fallos: 322:1726). <br/>
	En el precedente “Verrocchi", la CSJN sostuvo que el presupuesto para el dictado de un decreto de necesidad es 1) que sea imposible dictar la ley mediante el trámite ordinario previsto por la Constitución, vale decir, que las Cámaras del Congreso no puedan reunirse materialmente por razones de fuerza mayor - acciones bélicas o desastres naturales - y 2) cuando la solución legislativa sea de una urgencia tal que deba ser solucionada inmediatamente en un plazo incompatible con el que demanda el trámite normal de las leyes". <br/>
	Por ello, la Corte Suprema considero "que corresponde al Poder Judicial el control de constitucionalidad sobre las condiciones bajo las cuales se admite esa facultad excepcional que constituyen las actuales exigencias constitucionales para su ejercicio (CSJN, 19/8/99, Fallos, 323:1934). La Corte ya sostuvo que la emergencia es un hecho cuyo ámbito temporal difiere según las circunstancias de épocas o sitios y agrego que se trata de una situación extraordinaria que incide sobre el orden económico y social, e influye sobre la subsistencia misma de la organización jurídica o política del Estado o el normal desenvolvimiento de sus funciones.  Por lo expuesto, el estado de emergencia es de carácter extraordinario y, como tal, transitorio.<br/>
	En conclusión, el hecho o condición que permite dictar el acto legislativo en el campo Ejecutivo debe ser excepcional, necesario y urgente. Por último, en ese escenario, debe agregarse la imposibilidad del Congreso de legislar esa Circunstancia". <br/>
	De modo que no resulta suficiente el hecho de que la situación que sirve de antecedente revista carácter excepcional y grave y, a su vez, necesario y urgente, sino que, además, es imprescindible que esa circunstancia torne objetivamente imposible seguir el trámite ordinario de formación y sanción de las leyes y es el juez quien debe controlar la existencia de estado de imposibilidad. <br/>
	Si bien el supuesto de determinación de la existencia de circunstancias de hecho que llevan al Poder Ejecutivo a dictar decretos de necesidad y urgencia esta, de hecho, en manos de ese mismo Poder Ejecutivo, sin perjuicio de ello, el control posterior por parte del Legislativo acerca de si hubo o no dichas circunstancias, o del Judicial respecto de si fueron determinadas en modo arbitrario (en particular la existencia de hechos o circunstancias extraordinarias de habilitación que impiden seguir el trámite ordinario de la ley), será fundamental para que subsistan las garantías fundamentales de nuestra Constitución, es decir, para que subsista el sistema mismo.<br/>
	Así las cosas, no se ha configurado ninguna de las circunstancias fácticas que la norma constitucional describe para dictar el decreto en crisis, esto es, una situación de emergencia que impida la reunión del Congreso o que, en su caso, exhiba una solución temporal inmediata.<br/>
	En el caso “Leguizamón Romero" la Corte Suprema dijo que "únicamente en situaciones de grave trastorno que amanecen la existencia, la seguridad o el orden público o económico, que deben ser conjuradas sin dilaciones puede el Poder Ejecutivo nacional dictar normas que se suyo integran las atribuciones del Congreso, siempre y cuando sea imposible a este dar respuesta a la circunstancia de excepción. En consecuencia, el ejercicio de la prerrogativa en examen está sujeto a las reglas específicas que exigen un estado de excepción y el impedimento de recurrir al sistema formal de formación y sanción de las leyes y contemplan, además, una intervención posterior del Legislativo" (CSJN, 7/12/04, Fallos, 327:5559).
	En efecto, el art. 99 inc. 3 de la Constitución nacional no deja lugar a dudas de que la admisión del ejercicio de facultades legislativas por parte del Poder Ejecutivo, se hace bajo condiciones de rigurosa excepcionalidad y con sujeción a exigencias materiales y formales, que constituyen una limitación y no una ampliación de la práctica seguida en el país. De manera tal, que la conveniencia del presidente de recurrir al dictado de los decretos de necesidad, en sustitución del trámite legislativo ordinario, no es una razón suficiente para su ejercicio.<br/>
	En este sentido, sostiene Bidart Campos  que el texto nuevo es esto en muy claro y elocuente; a la mención de excepcionalidad agrega palabras que no soportan tergiversaciones oportunistas; cuando dice que las circunstancias excepcionales hacen imposible el seguimiento del procedimiento legislativo, hemos de entender que esta imposibilidad no alcanza a alojar una mera inconveniencia, ni habilita a elegir discrecionalmente, por un criterio coyuntural y oportunista, entre la sanción de una ley y la emanación más rápida de un decreto (Bidart Campos, "Manual de la Constitución reformada", ed, 2003), p.252).<br/>
	Que a la validez constitucional del decreto nacional 669/2019 le es aplicable la interpretación de la doctrina de las emergencias económicas mediante la cual se profundizó la necesidad de intentar objetivar los criterios para ejercer el control judicial de constitucionalidad de aquella reglamentación que se dictara -sea por el Poder Ejecutivo como Legislativo- para paliar los efectos de la crisis, en el caso, en un sector de alta siniestralidad.<br/>
	En el caso "Risolia de Ocampo" la Corte considero que "el fundamento de los decretos de necesidad y urgencia es la necesidad de poner fin o remediar situaciones de gravedad que obligan a intervenir en el orden patrimonial, fijando plazos, concediendo esperas, como una forma de hacer posible el cumplimento de las obligaciones, a la vez, que atenuar su gravitación negativa sobre el orden económico o institucional y la sociedad en su conjunto". Agrega luego que "uno de los requisitos indispensables para que pueda reconocerse la validez del decreto como el cuestionado en el sub lite es que este tenga la finalidad de proteger los intereses generales dela sociedad y no de determinados individuos" (CSJN, 2/8/00, Fallos, 323:1934; LL, 2000-F137).<br/>
	Consecuentemente con lo expuesto, los decretos de necesidad y urgencia deben perseguir un interés general relativo a la subsistencia misma de la organización social y no simplemente un interés sectorial (Balbín, Carlos "Constitución de la Nación Argentina y normas complementarias. Análisis doctrinal y jurisprudencial", obra dirigida por Daniel Sabay, coordinador Pablo Manili, Ed. Hammurabi, Bs. As, tomo 4, pág. 175).<br/>
	Con el dictado del decreto de urgencia nro. 669/19 el Poder Ejecutivo intentó paliar la crisis de las compañías aseguradoras de las mismas mediante el dictado de un decreto de necesidad y urgencia trasladando a las víctimas del infortunio la carga de financiar tal situación de emergencia del sector restringiendo sus legítimas acreencias, en vez de acudir a alguna de las alternativas de las que dispone el Estado para superar esta crisis sectorial.<br/>
	Concluyo que no han existido ninguna de las circunstancias fácticas que la norma constitucional describe para el dictado del decreto en crisis, que de aplicarse al caso concreto genera una lesión de imposible reparación posterior sobre el derecho de propiedad del actor y trabajo de los abogados, por lo que se impone declarar su inconstitucionalidad y consecuente inaplicabilidad al caso de autos. <br/>
	A igual conclusión se arriba con la Resolución SSN 1039/19 (BO 13/11/2019), dictada en concordancia con el DNU 669/19. La nueva resolución determina que SSN publicara las tasas de variación mensual y la formula mediante la cual se debe calcular la tasa de variación diaria del RIPTE. Esto significa que además de la disminución del crédito de los trabajadores al eliminar la tasa de interés originalmente prevista en el párrafo 2° del art. 12 según Ley n° 27348, dispuesta por el DNU 669/19, ahora la SSN dispone que en vez de calcular el ajuste RIPTE entre dos índices de las fechas que correspondan lo reduce al convertirlo en una tasa simple diaria de interés.<br/>
	b) En cuanto a la aplicación al caso de autos de la acumulación de intereses prevista en el art. 770, inc. b) del CCyCN considero que no haber petición al respecto por la parte interesada, no resulta procedente.<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
	<br/>
	A la misma cuestión, el Dr. ${tercerJuez} dijo:<br/>
	Que...<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	<span class="negrita"> A la segunda cuestión el Dr. De Cillis dijo: </span><br/>
	1.- De conformidad con lo expuesto en la primera cuestión propongo hacer lugar a la demanda instaurada por el Sr. Fabián Ismael Moreira contra ${demandada} por la suma de  <span class="negrita"><i>$ ${transformar(total)} (pesos ...), S.E. u O. </i></span><br/>
	Desde la fecha de la primera manifestación invalidante y hasta el momento de la liquidación que se practique por Secretaría, el ingreso base devengará un interés equivalente al promedio de la tasa activa cartera general nominal anual vencida a treinta (30) días del Banco de la Nación Argentina (art. 12, inc. 2° de la ley 24.557, mod. por el art. 11 de la ley 27.348).<br/>
    <br/>
    PONER 770 SI CORRESPONDE
    <br/>
	Luego, a partir de la mora en el pago de la indemnización será de aplicación lo establecido por el artículo 770 del Código Civil y Comercial acumulándose los intereses al capital, y el producido devengará un interés equivalente al promedio de la tasa activa cartera general nominal anual vencida a treinta (30) días del Banco de la Nación Argentina, hasta la efectiva cancelación (art. 12, inc. 3° de la ley 24.557, mod. por el art. 11 de la ley 27.348).<br/>
	El importe resultante deberá ser depositado en el Banco de la Provincia de Buenos Aires, Sucursal Tribunales de San Isidro a la orden del Tribunal y como perteneciente a estos autos, todo ello en el plazo de diez días de notificada la presente.<br/>
	2.- Propongo declarar la inconstitucionalidad de los arts. 21, 22 y 46 de la ley 24.557 y del DNU 669/19.<br/>
	3.- Propongo declarar inconducente el tratamiento del pedido de declaración de inconstitucionalidad de los arts. 8 de la ley 24.557; 4 ap. 2 de la ley 26.773 y del Decreto 54/2017.<br/>
    4.- Propongo declarar innecesario el tratamiento de las inconstitucionalidades planteadas respecto del art. 17 del Decreto 472/14.<br/>
    5.- Propongo rechazar el planteo de inconstitucionalidad de los arts. 3 de la ley 26.773 y de los arts. 1 y 8 de la ley 24.432.<br/>
    6.- Propongo imponer las costas en su totalidad a la parte demandada en su carácter de vencida (art. 19 de la ley 11.653), regulándose los honorarios de los profesionales intervinientes conforme el art. 277 de la L.C.T. y lo resuelto por la SCBA en autos: “MORCILLO HUGO HECTOR C/ PROVINCIA DE BS. AS. S/ INCONST. DECRE. LEY 9020” de fecha 8.11.2017, de la siguiente manera: Representación letrada parte actora: <br/>
    A favor de la Dra.  ${abogadoActor} en la cantidad de jus equivalentes al 18 % por su actuación en la presentación de la demanda, en la etapa probatoria y en la audiencia de Vista de Causa.
    <br/> A favor de la representación letrada de ${demandada}: A favor de la  Dra. ${abogadoDemandada} en la cantidad de jus equivalentes al 12 % por su actuación en la contestación de la demanda, en la etapa probatoria y en la audiencia de Vista de Causa.<br/>
    Y los de la perito médico ... en un 4,5 %, en todos los casos con más el aporte de ley correspondiente sobre el resultante del capital más los intereses, el que surgirá de la liquidación a practicarse por Secretaría (arts. 21, 23, 24 y concs. de la ley 8904; art. 21, ley 14.697; ley 12.207 - texto conf. leyes 12.696 y 13.314 -).<br/>
	Por los fundamentos expuestos,<br/>
    <span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	<span class="negrita"> A la misma cuestión, el Dr. Gabriel A. Dos Santos dijo: </span><br/>
	Que adhiero al voto emitido por el Dr. De Cillis por análogos fundamentos y conclusiones.<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	A la misma cuestión, el Dr. ${tercerJuez} dijo:<br/>
	Que ...<br/>
	<span class="negrita">Voto en el sentido indicado.</span><br/>
    <br/>
	Con lo que terminó el acto, firmando los Sres. Jueces por ante mí, que doy fe.<br/>
    <br/>
    <br/>

    <span class="negrita"> S E N T E N C I A </span>
    <br/>
	San Isidro,<br/>
	Por ello y demás fundamentos dados en el acuerdo que antecede el Tribunal, por mayoría, FALLA:<br/>
	
	Asimismo hágase saber que a las sumas resultantes deberán adicionárseles el 21% en concepto de IVA a aquellos profesionales que revistan el carácter de Responsables Inscriptos.<br/>
	REGISTRESE. PRACTIQUESE LIQUIDACION CONFORME LO NORMADO POR EL ART. 48 LEY 11.653. NOTIFIQUESE.-<br/>
    
  `
}

function balthazard (){
    var x = $("#incFisica").val();
    var y = 100 - x;
    var j = $("#incPsicol").val();
    $("#porcentaje").val(parseFloat(x) + parseFloat((j * y)/100));
}


$(document).ready(function () {
    // $(".dash-nav-dropdown-toggle").click(function () {
    //     $(this).closest(".dash-nav-dropdown")
    //         .toggleClass("show")
    //         .find(".dash-nav-dropdown")
    //         .removeClass("show");

    //     $(this).parent()
    //         .siblings()
    //         .removeClass("show");
    // });

    // $(".menu-toggle").click(function () {
    //     if (mobileBreakpoint.matches) {
    //         $(".dash-nav").toggleClass("mobile-show");
    //     } else {
    //         $(".dash").toggleClass("dash-compact");
    //     }
    // });

    // $(".searchbox-toggle").click(function () {
    //     $(".searchbox").toggleClass("show");
    // });

    //A PARTIR DE ACA EMPIEZA MI CODIGO--- REVISAR TODO, PRINCIPALMENTE LOS ID

    // variables para fecha
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = (day) + - + (month) + - + now.getFullYear();

    $("#fechaHasta").val(today);

    $("#fechaAccidente").on("blur", function (){

        calcularPiso();

    });

    $("#jumboton").click(function () {

        miFuncion();
        mostrar();
        $(".mostrarTodo, .mostrarTodo_2").css("display", "flex");
        $("#mostrarLeyAplicable").fadeIn(500, "swing");
        $("#mostrarPisoMinimo").fadeIn(600, "swing");
        $("#mostrarCoeficienteEdad").fadeIn(700, "swing");
        $("#mostrarIBM").fadeIn(800, "swing");
        $("#mostrarFormula").fadeIn(900, "swing");
        $("#mostrarSentencia").fadeIn(1100, "swing");
        $("#copyJumbotron").fadeIn(1100, "swing");
        formula_LRT();
    
    })

    $("#edad, #edadchk").on("click", function () {

        desbloquearText();

    })

    $("#fechachk").on("click", function () {
        bloquearText();
    })



    $("#fechaNacimiento").on("change", function () {

        calculoFecha();

    })

    $("#fechaAccidente").on("blur", function () {

        fa1 = $("#fechaAccidente").val();
        fa2 = fa1.slice(0, 4);
        fa3 = Number(fa2) - 1;
        $("#fechaInicioRL").val(fa1.replace(fa2, String(fa3)));

    });

    $('tbody>tr>td>input.rem, tbody>tr>td>input[class=remun24557]').on('keydown',function(e){ 
        var keyCode = e.keyCode || e.which; 
       
        if(e.keyCode === 13) { 
         e.preventDefault();
         (this).select(); 
         $('input')[$('input').index(this)+1].focus(); 
         } 
        
    });

    $("#incFisica, #incPsicol").blur(balthazard);

    $("#jumboton_acuerdos").click(function(){

        
        $(".mostrarTodo_2").replaceWith($(".mostrarTodo_3"));
        $(".mostrarTodo_3").css("display", "flex");
        
        $("#hastaHoy").text(today);
        

    });

    $("#acuerdoListo").click(function(){
        
        var capital = parseFloat($("#capital").val());
        var acuerdo = parseFloat($("#montoAcuerdo").val());
        var nuevoCapital = parseFloat($("#nuevoCapital").val());
        var totalCapital = parseFloat($("#totalCapital").val());
        
        if(acuerdo < nuevoCapital || acuerdo < capital){

            $(".romualdi, .deCillis, .dosSantos").fadeOut(1);
            $(".deCillisNo, .romualdiNo, .dosSantosNo").fadeIn(1);
            
        }
        if(acuerdo > nuevoCapital && acuerdo < totalCapital){
            $(".romualdi").fadeOut(1);
            $(".romualdiNo").fadeIn(1);
            $(".deCillisNo, .dosSantosNo").fadeOut(1);
            $(".deCillis, .dosSantos").fadeIn(1);
        }
        
        if(acuerdo > totalCapital){
            $(".deCillis, .romualdi, .dosSantos").fadeIn(1);
            $(".romualdiNo, .deCillisNo, .dosSantosNo").fadeOut(1);
        }

    });

    $("#copiarTexto").click(function(){

       $("#mostrarSentencia").text().select();
    })



    // Dev utilities
    // $("header.dash-toolbar .menu-toggle").click();
    // $(".searchbox-toggle").click();
});