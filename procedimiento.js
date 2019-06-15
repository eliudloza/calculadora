
$(document).ready(function(){

var num1, num2, operacion;

$('#point').on("click",function(){
$('#result').append(".");
});

$('#n1').on("click",function(){
$('#result').append("1");
});
$('#n2').on("click",function(){
$('#result').append("2");
});
$('#n3').on("click",function(){
$('#result').append("3");
});
$('#n4').on("click",function(){
$('#result').append("4");
});
$('#n5').on("click",function(){
$('#result').append("5");
});
$('#n6').on("click",function(){
$('#result').append("6");
});
$('#n7').on("click",function(){
$('#result').append("7");
});
$('#n8').on("click",function(){
$('#result').append("8");
});
$('#n9').on("click",function(){
$('#result').append("9");
});
$('#n0').on("click",function(){
$('#result').append("0");
});

});
$("#clear").on("click",function(){
 resetear();
 });
 $("#suma").on("click",function(){
 num1= $("#result").html();
   operacion = "+";
   limpiar();
 });
 $("#resta").on("click",function(){
 num1 = $("#result").html();
   operacion = "-";
   limpiar();
 });
 $("#multi").on("click",function(){
 num1 = $("#result").html();
   operacion = "*";
   limpiar();
 });
 $("#divi").on("click",function(){
 num1 = $("#result").html();
   operacion = "/";
   limpiar();
 });
 $("#calcular").on("click",function(){
 num2 = $("#result").html();
   resolver();
 });
 
 function limpiar(){
 $("#result").html("");
}
 
function resetear(){
 $("#result").html("");
 num1 = 0;
 num2 = 0;
 operacion = "";
}

function resolver(){
 var res = 0;
 switch(operacion){
 case "+":
 res = parseFloat(num1) + parseFloat(num2);
 break;
 
 case "-":
     res = parseFloat(num1) - parseFloat(num2);
     break;
 
 case "*":
 res = parseFloat(num1) * parseFloat(num2);
 break;
 
 case "/":
 res = parseFloat(num1) / parseFloat(num2);
 break;
 }
 resetear();
 $("#result").html(res);
}