var titulo = document.querySelector(".titulo");
//var peso = document.querySelector(".info-peso").textContent;
//var altura = document.querySelector(".info-altura").textContent;

//var total = peso / (altura*altura);
//var imc = document.querySelector(".info-imc");
imc.textContent = total;
//console.log(paciente);
console.log(imc);
console.log(titulo);
console.log(titulo.textContent);
console.log('fui carregado de outra página');
titulo.textContent = "Meu título";

//var paciente = document.querySelector("#primeiro-paciente");
var peso2 = paciente.querySelector(".info-peso").textContent;
console.log(peso2);


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i=0; i<pacientes.length; i++){
    var paciente = pacientes.item(i);
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");
    var pesovalido = true;
    var alturavalida = true;

    if (peso <= 0 || peso >= 1000) {
        pesovalido=false;
    }
    if (altura >=3 || altura <= 0) {
        alturavalida=false;
    }
    if (!alturavalida) {
        imc.textContent = "altura invalida";
    }
    if (!pesovalido) {
        imc.textContent = "peso invalido"
    }
console.log(peso);
    console.log(altura);
    if (alturavalida && pesovalido){
        var total = peso / (altura*altura);
        imc.textContent = total.toFixed(2);
    }
}