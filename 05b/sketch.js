//Cuerpo
var x = 0;
var y = 40;
var x1 = 0;
var y1 = 70;
var x2 = 0;
var y2 = 70;
var x3 = 0;
var y3 = 190;
var x4 = 0;
var y4 = 190;

//Contador
var con = 0;

//Reloj
//Variables de tiempo
var segundo;
var minuto;
var hora; 
var s;

//Variables de tiempó regla de 3
var segundoMap;
var minutoMap; 
var horaMap;

function setup() {
  createCanvas(400, 400);
  //Cambiar angulo a grados 
  angleMode(DEGREES);
} 

function draw() { 
  background(0);
  strokeWeight(1);
  
  //Guardar valores actuales en variables de tiempo
  segundo = second();
  minuto = minute();
  hora = hour();
  s = second();
  
  
  strokeWeight(4);
  translate(width/2,height/4);
  ellipse(0,0,80,80);
  
  //Cuerpo
  stroke(245, 210, 17);
  line(x,y,x,y+150);
  line(x1,y1,x1-50,y1+40);
  line(x2,y2,x2+50,y2+40);
  line(x3,y3,x3-40,y3+85);
  line(x4,y4,x4+40,y4+85);
  
  //Segundero
  push();
  strokeWeight(0.9);
  //Regla de 3 para segundos
  segundoMap = map(segundo,0,59,0,359);
  rotate(segundoMap);
  line(0,0,0,-40);
  pop();
  
  //Minutero
  push();
  strokeWeight(2);
  //Regla de 3 para minutos
  minutoMap = map(minuto,0,59,0,359);
  rotate(minutoMap);
  line(0,0,0,-40);
  pop();
  
  //Hora
  push();
  strokeWeight(3);
  if(hora>12)
  {
    hora = hora - 12;
  }
  //Regla de 3 para hora
  horaMap = map(hora,0,11,0,359);
  rotate(horaMap);
  line(0,0,0,-20);
  pop();
  
  if(s == 10|| s == 20|| s == 30|| s == 40|| s == 50||s == 60)
  {
    con = con + 1; 
  }
  if(con > 10)
  {
    x1 = x1+1*-1;
    y1 = y1+1;
  }
  if(con > 80)
  {
    x2 = x2+1;
    y2 = y2+1;
  }
  if(con > 150)
  {
    x3 = x3+1*-1;
    y3 = y3+1;
  }
  if(con > 220)
  {
    x4 = x4+1;
    y4 = y4+1;
  }
  
}