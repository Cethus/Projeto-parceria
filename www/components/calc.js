
$(document).on('click','#calc',function(){
  var altura = $("#alt").val();
  var peso = $("#peso").val();
  var idade = $("#idade").val();
  var tipo = $("#tipo").val();
  var sexoM = $("input[id='sexo1']:checked").val();
  var sexoF = $("input[id='sexo2']:checked").val();
  var res;
  if(sexoM == "H")
  {
    res =parseFloat(tipo)*(66 + (13.7*parseFloat(peso))+ (5*parseFloat(altura))- (6.8*parseFloat(idade)));
  }
  else if(sexoF == "M")
  {
    res =parseFloat(tipo)*(65.5 + (9.6*parseFloat(peso))+ (1.8*parseFloat(altura))- (4.7*parseFloat(idade)));
  }

  $("#res").val(res);

});

