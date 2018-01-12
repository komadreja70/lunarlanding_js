// ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
// NAVE 
var y = 10; /* altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo */
var v = 0;
var fuel = 100;
var a = g; /*la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado) */
// MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
var hayfuel=true;
var nivell = "facil";
var pausat = false;

// al cargar por completo la página... 
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	//definición de eventos
	  //mostrar menú móvil 
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("espaimenu")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("espaimenu")[0].style.display = "none";
		start();
	}
	
	// encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	// encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//events de menu - Inicia/ Pausa
	document.getElementById("pausa").onclick = function () {
		pausar();
	}
	//events de menu - Reinicia
	document.getElementById("reinicia").onclick = function () {
		//document.getElementsByClassName("espaimenu")[0].style.display = "none";
		document.getElementById("missatge").style.display = "none";
		reiniciar();
	}
	
	// Empezar a mover la nave justo después de cargar la página
	start();
}

// Definición de funciones
function start(){
	// cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
	pausat=false;
}

function stop(){
	clearInterval(timer);
	clearInterval(timerFuel);
	pausat=true;
}
function reiniciar() {
	y = 10;
	v = 0;
	a = -g;
	fuel = 100;
	document.getElementById("fuel").innerHTML = fuel.toFixed(2);
	hayFuel = true;
	document.getElementById("naveimg").src = "img/rocketOff.png";
	document.getElementById("missatge").style.display = "none";
	stop();
	start();
}

function pausar() {
	if (pausat) {
		start();
		document.getElementById("missatge").style.display = "none";
	} else {
		stop();
			document.getElementById("missatge").innerHTML = "Pausat!!";
			document.getElementById("missatge").style.display = "block";
		}
	}


function moverNave(){
	// cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	// actualizar marcadores
	velocidad.innerHTML=v.toFixed(6);
	altura.innerHTML=(70-y).toFixed(6);
			
	// mover hasta que top sea un 70% de la pantalla y no nos salgamos de la pantalla por arriba
	if ((y < 70) && (y > 0))
		{ document.getElementById("nave").style.top = y+"%"; }
	else { 
		// chequeig on hem aturat
			//Dalt
			if (y < 0) {
				document.getElementById("naveimg").src = "img/nau_off.svg";
				document.getElementById("altura").innerHTML = 70.0.toFixed(2);
					}
			//Baix
			else {
				document.getElementById("altura").innerHTML = 0.00.toFixed(2);
				if (v > trobavllindar()) {
					document.getElementById("naveimg").src = "img/nau_boom.svg";
					}
				else {
					document.getElementById("missatge").innerHTML = "Enhorabona ho has aconseguit !!";
					document.getElementById("missatge").style.display = "block";
					
				}
			}
		stop();
	}
}
function trobavllindar() {
	//velocitat llindar segons nivell de dificultad: 1m/s difícil, 3m/s normal, 5m/s facil 
	var vllindar;
	switch (nivell) {
		case "facil": vllindar = 5;
			break;
		case "normal": vllindar = 3;
			break;
		case "dificil": vllindar = 1;
	}
	return vllindar;
}
function motorOn(){
	if ((hayfuel) && (!pausat)) {
	// el motor da aceleración a la nave
	a=-g;
	// mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);
	if (hayfuel==true){document.getElementById("naveimg").src="img/nau_on.svg";}
	}
}
function motorOff(){
	a=g;
	if (!pausat) {
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("naveimg").src="img/nau_off.svg";
	}
}
function actualizarFuel(){
	// Restamos combustible hasta que se agota si no s'ha pausat
	if(hayfuel && !pausat){
	fuel -=0.1;
	if (fuel < 0 ) {hayfuel=false;fuel = 0;}
	combustible.innerHTML=fuel.toFixed(6);	
}
}

