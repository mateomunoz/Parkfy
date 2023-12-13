//Uso estricto
"use strict";

function fechaHoy(){
var hoy = new Date();
var yyyy = hoy.getFullYear();
var mm = hoy.getMonth()+1; 
var dd = hoy.getDate(); 

if (dd<10) {dd = "0" + dd;}

if (mm<10) {mm = "0" + mm;}

var fechaHoy = yyyy + "-" + mm + "-" + dd;
document.getElementById("fEntrada").setAttribute("min", fechaHoy);
}

fechaHoy ();      

function calculaFechaSalida() {
	
var miFechaEntrada = document.getElementById("fEntrada").value;
console.log("miFechaEntrada = " + miFechaEntrada);	
document.getElementById("fSalida").setAttribute("min", miFechaEntrada);
document.getElementById("fSalida").value = miFechaEntrada;
}
calculaFechaSalida();


var casilla = document.getElementById("aceptoCondic");
var boton = document.getElementById("botonEnviar");


function habilitaBoton(){if(casilla.checked){boton.disabled = false;}
						 else {boton.disabled = true;} 
						 }


function calcular(){					 
	var miNombre = document.getElementById("nombre").value;
	var miApellido = document.getElementById("apellido1").value;
	var miSegundoApellido = document.getElementById("apellido2").value;
	var miParking = document.getElementById("parking").value;
	var miEntrada = document.getElementById("fEntrada").value;
	var miSalida = document.getElementById("fSalida").value;
	var miMarcaModelo = document.getElementById("marca-modelo").value;
	var miMatricula = document.getElementById("matricula").value;
  	var fecha1 = Date.parse(miEntrada);
  	var fecha2 = Date.parse(miSalida);
  	
	var precioHora = 0;
	switch (miParking){
		case "Chamartin": 
		precioHora = 0.60;
		break;
		case "Callao" : 
		precioHora = 0.85;
		break;
		case "Atocha" : 
		precioHora = 75;
		break;
		}

	document.getElementById("tNombreApellido").innerHTML = miNombre + " " + miApellido + " " + miSegundoApellido;
	
	document.getElementById("tCoche").innerHTML = miMatricula + " " + miMarcaModelo;
	
	document.getElementById("tParking").innerHTML = miParking;
	
	document.getElementById("tFechaEntrada").innerHTML = miEntrada;
	
	document.getElementById("tFechaSalida").innerHTML = miSalida;
	
	document.getElementById("tCoche").innerHTML = miMatricula + " " + miMarcaModelo;
	
	document.getElementById("tPrecioHora").innerHTML = precioHora.toLocaleString("es-ES" , { style: "currency", currency: "EUR" });
	
}

