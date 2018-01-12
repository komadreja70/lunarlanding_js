var g=1.622;var dt=0.016683;var timer=null;var timerFuel=null;var y=10;var v=0;var fuel=100;var a=g;var velocidad=null;var altura=null;var combustible=null;var hayfuel=!0;var nivell="facil";var pausat=!1;window.onload=function(){velocidad=document.getElementById("velocidad");altura=document.getElementById("altura");combustible=document.getElementById("fuel");document.getElementById("showm").onclick=function(){document.getElementsByClassName("espaimenu")[0].style.display="block";stop()}
document.getElementById("hidem").onclick=function(){document.getElementsByClassName("espaimenu")[0].style.display="none";start()}
document.onclick=function(){if(a==g){motorOn()}else{motorOff()}}
document.onkeydown=motorOn;document.onkeyup=motorOff;document.getElementById("pausa").onclick=function(){pausar()}
document.getElementById("reinicia").onclick=function(){document.getElementById("missatge").style.display="none";reiniciar()}
start()}
function start(){timer=setInterval(function(){moverNave()},dt*1000);pausat=!1}
function stop(){clearInterval(timer);clearInterval(timerFuel);pausat=!0}
function reiniciar(){y=10;v=0;a=-g;fuel=100;document.getElementById("fuel").innerHTML=fuel.toFixed(2);hayFuel=!0;document.getElementById("naveimg").src="img/rocketOff.png";document.getElementById("missatge").style.display="none";stop();start()}
function pausar(){if(pausat){start();document.getElementById("missatge").style.display="none"}else{stop();document.getElementById("missatge").innerHTML="Pausat!!";document.getElementById("missatge").style.display="block"}}
function moverNave(){v+=a*dt;y+=v*dt;velocidad.innerHTML=v.toFixed(6);altura.innerHTML=(70-y).toFixed(6);if((y<70)&&(y>0))
{document.getElementById("nave").style.top=y+"%"}
else{if(y<0){document.getElementById("naveimg").src="img/nau_off.svg";document.getElementById("altura").innerHTML=70.0.toFixed(2)}
else{document.getElementById("altura").innerHTML=0.00.toFixed(2);if(v>trobavllindar()){document.getElementById("naveimg").src="img/nau_boom.svg"}
else{document.getElementById("missatge").innerHTML="Enhorabona ho has aconseguit !!";document.getElementById("missatge").style.display="block"}}
stop()}}
function trobavllindar(){var vllindar;switch(nivell){case "facil":vllindar=5;break;case "normal":vllindar=3;break;case "dificil":vllindar=1}
return vllindar}
function motorOn(){if((hayfuel)&&(!pausat)){a=-g;if(timerFuel==null)
timerFuel=setInterval(function(){actualizarFuel()},10);if(hayfuel==!0){document.getElementById("naveimg").src="img/nau_on.svg"}}}
function motorOff(){a=g;if(!pausat){clearInterval(timerFuel);timerFuel=null;document.getElementById("naveimg").src="img/nau_off.svg"}}
function actualizarFuel(){if(hayfuel&&!pausat){fuel-=0.1;if(fuel<0){hayfuel=!1;fuel=0}
combustible.innerHTML=fuel.toFixed(6)}}
