
function lastSubtotal(){
    const ultimo = document.querySelectorAll(".tdSubtotal");
    let anteultimo = ultimo.length -2;
    let result = ultimo.item(anteultimo).textContent;
    return result;
}

function fechaHasta(){
    const ultimo = document.querySelectorAll(".fechaHasta");
    let anteultimo = ultimo.length -2;
    // let fecha = new Date(ultimo.item(anteultimo).valueAsNumber);
    let fecha = new Date(ultimo.item(anteultimo).value);
    
    let dia = fecha.getDay() + 1;
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    
    fecha.setFullYear(anio, mes, dia);
    let fechaEsp = (fecha.toLocaleDateString());
    
    return fechaEsp;

}

// sumarKI(){

    
// }

// sumarSubtotal(){

//     var montoInicial = $("#montoInicial").val();

// }

    
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $("#addTemplate").click(function(){
        $("#tablaSin275>tbody").append($("#template").html());
        $(".filaAgregada:last tr:nth-child(1) td:nth-child(2)").text(lastSubtotal());
        $(".filaAgregada:last tr:nth-child(2) td:nth-child(2)").text(fechaHasta());  
        
        sumarKI();
        sumarSubtotal();
        sumarTotal();
    });
    

    $("#remTemplate").click(function(){

        $(".filaAgregada:last").remove();
    });
   
});