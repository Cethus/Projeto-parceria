
$(document).on("click", "#calc", function(){
  var altura = $("#alt").val();
  var peso = $("#peso").val();
  var idade = $("#idade").val();
  var tipo = $("#tipo").val();
  var sexo = $("#sexo").val();
  var res;
  
  if(sexo == "feminino")
  {
    res = tipo * (66 + (13.7 * peso)+ (5 * altura) - (6.8 * idade));
  }
  else if(sexo == "masculino")
  {
    res = tipo * (65.5 + (9.6 * peso)+ (1.8 * altura) - (4.7 * idade));
  } 

  $("#res").val(res.toString());

});

