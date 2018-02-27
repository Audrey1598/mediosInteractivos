//variables tiempo
var hora;
var minuto;
var segundo;
var ano;
var mes;
var dia;

//variables color background
var Co1= 82;
var Co2= 194;
var Co3=55;
var Dir= 1;


function setup() { 
  createCanvas(400, 400);
 angleMode(DEGREES);
  
  
hora = hour();
  minuto = minute();
  segundo = second ();
} 

function draw(){ 
  background(Co1, Co2, Co3);
  
  Co1= Co1 + 2
;
  Co2 = Co2 + 2;
  Co3 = Co3 + 2;
  
  
if( Co1 <= 255){
    Co1= Co1 *-Dir;
  Co2 = Co2 *-Dir;
  Co3 = Co3 *-Dir ;
  }
  
  
  ano = year();
  mes =month();
  dia =day();
  
  hora = hour();
  minuto = minute();
  segundo=second();
  
  
  fill(216, 190, 228);
  rect(100, 100, 200, 200);
  
  
  push();
  translate( height/ 2, width/ 2);
  
  push();
  segundoMapeado = map(segundo, 0, 59, 0, 359);
  rotate(segundoMapeado);
  line(0, 0, 0, -100);
   pop();
  
  push();
  minutoMapeado= map(minuto, 0, 59, 0, 359);
  rotate(minutoMapeado);
  line(0, 0, 0, -70);
  pop();
  
  push();
  if(hora>12){
    hora = hora -12;
    }
  horaMapeado= map(hora, 0, 11, 0, 359);
  rotate(horaMapeado);
  line(0, 0, 0, -50);
  pop();
    
  

}


//relojes fisicos, uno textual, otro filosofico 
//05a, 05b