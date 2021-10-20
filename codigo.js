$(document).ready(function(){

    $("#enviar").click(function(event){
        event.preventDefault();
        var cadena1 = $("#num1").val();
        var cadena2 = $("#num2").val();
        var operador = $('#operador').val();
        var num1 = parseInt(cadena1);
        var num2 = parseInt(cadena2);
      
        if(operador == "+"){
        var operacion = num1 + num2;
        /*$("#resultado").text(`El resultado de la suma es: ${operacion}`)*/
        $("#resultado").text('El resultado de la suma es:')
        $("#input-resultado").val(operacion);
        }
        else if(operador == "-"){
        var operacion = num1 - num2;
        $("#resultado").text('El resultado de la resta es:')
        $("#input-resultado").val(operacion);
        }
        else if(operador == "*"){
        var operacion = num1 * num2;
        $("#resultado").text('El resultado de la multiplicación es:')
        $("#input-resultado").val(operacion);
        }
        else if(operador == "/"){
        var operacion = num1 / num2;
        $("#resultado").text('El resultado de la divisón es:')
        $("#input-resultado").val(operacion);
        }
        else{
            $("#resultado").text('Signo no valdo')
        }
        
    });
});