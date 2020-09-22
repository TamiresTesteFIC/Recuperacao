function exibeRetangulo(){
	document.getElementById("divRet").style="";
	document.getElementById("divIMC").style="display: none;";
	document.getElementById("divCir").style="display: none;";
}

function exibeIMC(){
	document.getElementById("divIMC").style="";
	document.getElementById("divCir").style="display: none;";
	document.getElementById("divRet").style="display: none;";
}

function exibeCirculo(){
	document.getElementById("divCir").style="";
	document.getElementById("divIMC").style="display: none;";
	document.getElementById("divRet").style="display: none;";
}
 
function calcularRetangulo(){
	var base = document.getElementById("baseRetangulo").value
	var altura = document.getElementById("alturaRetangulo").value
	if (base =="" || altura =="") {
	alert("Digite a base e a altura");
	return
	}
	var resultado = base*altura
	alert("A área do retângulo é " + resultado);
 }	
	
function calcularCirculo(){	
	var raio = document.getElementById("raioCirculo").value;
	if (raio ==""  ) {
	alert ("Digite o raio do círculo");
	return;
	}
	var resultado = raio*raio*3.14
	alert ("A área do círculo é " + resultado);
}	
	
function calcularIMC(){	
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	if (peso =="" || altura ==""){
	alert("Digite o peso e a altura");
	return
	}
	var resultado = parseFloat(peso)/(parseFloat(altura)*parseFloat(altura));
	alert("Seu IMC é " + resultado);
}	

	