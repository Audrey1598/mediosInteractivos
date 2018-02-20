
var X= 0;
var Y= 0;

//colores de herrramientas
var c1 = 255;
var c2 = 170;
var c3 = 255;
var c4 = 0;
var c5 = 255;
var c6 = 221;
var c7 = 165;
var c8 = 255;
var c9 = 42;
var c10 = 100;


//variables herramientas
var posX5= 60;
var posY5= 60;

var PosRx= 50;
var PosRy= 90;
var PosOx=64;
var PosOy=105;

var PosKx= 50;
var PosKy= 137;
var PosTx= 45;
var PosTy= 140;

var PosDx= 60;
var PosDy= 180;

var PosLx1= 60;
var PosLy1= 210;
var PosLx2= 60;
var PosLy2= 230;



















//variables interracion
var botonCx = 40;
var botonCy = 40;
var botonCtam = 20;

var botonPx = 70;
var botonPy = 40;
var botonPtam = 20;

var boton3x = 100;
var boton3y = 40;
var boton3tam = 20;

var boton4x = 130;
var boton4y = 40;
var boton4tam = 20;

var boton1x = 40;
var boton1y = 40;
var boton1tam = 20;

var boton2x = 70;
var boton2y = 40;
var boton2tam = 20;

var boton3x = 100;
var boton3y = 40;
var boton3tam = 20;

var boton4x = 130;
var boton4y = 40;
var boton4tam = 20;

var boton1x = 40;
var boton1y = 40;
var boton1tam = 20;

var boton2x = 80;
var boton2y = 40;
var boton2tam = 20;

var herramienta= 0;
var cloro= 0;







function setup() {
  createCanvas (600, 400);
background (255, 255, 255)
for(var caballo =0; caballo < 10; caballo = caballo +1){
  for(var koko = 0; koko <2; koko = koko + 1){
    rect (X, Y, 40, 40);
    X = X + 40
    }
    X = 0 
    Y = Y + 40 
    }
 }
 
function draw() {
  
   fill( c1, c1, c1 - c1);
 ellipse (20, 20, 15, 15);
 
 fill (c2 - 138, c2 + 8, c2);
 ellipse (20, 60, 15, 15);
 
 fill (c3 - 40, c3 - 75, c3);
 ellipse (20, 100, 15, 15);
 
 fill (c4, c4 + 255, c4);
 ellipse (20, 140, 15, 15);
 
 fill (c5, c5 - 255, c5 - 255);
 ellipse (20, 180, 15, 15);
 
 fill (c6 + 60, c6 - 61, c6);
 ellipse (20, 220, 15, 15);
 
 fill (c7 + 90, c7, c7 - 165);
 ellipse (20, 260, 15, 15);
 
 fill (c8- 255, c8, c8);
 ellipse (20, 300, 15, 15);
 
 fill (c9 - 123, c9, c9);
 ellipse (20, 340, 15, 15);
 
 fill (c10 - 100, c10, c10 - 0);
 ellipse (20, 380, 15, 15);
 
  //circulo
 fill(10) 
 ellipse(60, 20, 20, 20);
  
  //ovni
  fill(0);
beginShape();
  vertex(posX5, posY5);
  vertex(posX5-15,posY5+5);
  vertex (posX5-10,posY5+10);
  vertex(posX5+10,posY5+10);
  vertex(posX5+15,posY5+5);
  endShape(CLOSE);
  
  fill(0);
  ellipse(posX5, posY5, 10, 10);
  
  //media
  
  fill(0);
  rect(PosRx, PosRy, 10, 20);
  ellipse(PosOx, PosOy, 15,10);
  
  //casa
  fill(0);
  rect(PosKx, PosKy, 20,15);
  triangle(PosTx,PosTy,PosTx+30,PosTy,PosTx+15,PosTy-10);
  
  //dona 
  fill(0);
  ellipse(PosDx,PosDy, 20, 20);
  fill(255);
  ellipse(PosDx, PosDy, 10,10);
  
  //cruz
  fill(0);
  line(PosLx1, PosLy1, PosLx2, PosLy2);
  line(PosLx1 -10, PosLy1 +10, PosLx2 + 10, PosLy2 - 10);
  
  
  
  
  
  	if (mouseIsPressed) {
		// Definimos el área sensible de los botones y para que sirven.
		// En este caso tenemos dos botones que sirven para cambiar entre
		// dos herramientas.
		if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 0 && mouseY < 0 + 40) {
			cloro = 0;
		}
		if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 40 && mouseY < 40 + 40) {
			cloro = 1;
		}
    if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 80 && mouseY < 80 + 40) {
			cloro = 2;
		}
    if (mouseX > 0 && mouseX < 0 + 40 &&
	    mouseY > 120 && mouseY < 120 + 40) {
			cloro = 3;
		}
      		if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 160 && mouseY < 160 + 40) {
			cloro = 4;
		}
      
      		if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 200 && mouseY < 200 + 40) {
			cloro = 5;
		}
      
      		if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 240 && mouseY < 240 + 40) {
			cloro = 6;
		}
      
      		if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 280 && mouseY < 280 + 40) {
			cloro = 7;
		}
      
      		if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 320 && mouseY < 320 + 40) {
			cloro = 8;
		}
      
      		if (mouseX > 0 && mouseX < 0 + 40 &&
			mouseY > 360 && mouseY < 360 + 40) {
			cloro = 9;
		}
      
      
      //herramientas
      		if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 0 && mouseY < 0 + 40) {
			herramienta = 0;
		}
		if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 40 && mouseY < 40 + 40) {
			herramienta = 1;
		}
    if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 80 && mouseY < 80 + 40) {
			herramienta = 2;
		}
    if (mouseX > 40 && mouseX < 40 + 40 &&
	    mouseY > 120 && mouseY < 120 + 40) {
			herramienta = 3;
		}
      		if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 160 && mouseY < 160 + 40) {
			herramienta = 4;
		}
      
      		if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 160 && mouseY < 160 + 40) {
			herramienta = 5;
		}
      
      		if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 200 && mouseY < 200 + 40) {
			herramienta = 6;
		}
      
      		if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 280 && mouseY < 280 + 40) {
			herramienta = 7;
		}
      
      		if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 320 && mouseY <320 + 40) {
			herramienta = 8;
		}
      
      		if (mouseX > 40 && mouseX < 40 + 40 &&
			mouseY > 340 && mouseY < 340 + 40) {
			herramienta = 9;
		}
      
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      


		// Una vez seleccionado el color, lo usamos para cambiar el
		// color de relleno de la figura que pintamos después.
		if (cloro == 0) {
      stroke(c1, c1, c1 - c1);
			fill( c1, c1, c1 - c1);
		}
		if (cloro == 1) {
      stroke(c2 - 138, c2 + 8, c2);
			fill (c2 - 138, c2 + 8, c2);
		}
      		if (cloro == 2) {
            stroke(c3 - 40, c3 - 75, c3);
			fill (c3 - 40, c3 - 75, c3);
		}
      		if (cloro == 3) {
            stroke(c4, c4 + 255, c4);
			fill (c4, c4 + 255, c4);
		}
      		if (cloro == 4) {
            stroke(c5, c5 - 255, c5 - 255);
			fill (c5, c5 - 255, c5 - 255);
		}
      		if (cloro == 5) {
            stroke(c6 + 60, c6 - 61, c6)
			fill (c6 + 60, c6 - 61, c6);
		}
      		if (cloro == 6) {
            stroke(c7 + 90, c7, c7 - 165);
      fill (c7 + 90, c7, c7 - 165);
		}
      		if (cloro == 7) {
            stroke(c8- 255, c8, c8);
			fill (c8- 255, c8, c8);
		}
      		if (cloro == 8) {
            stroke(c9 - 123, c9, c9);
			fill (c9 - 123, c9, c9);
		}
      		if (cloro == 9) {
            stroke(c10 - 100, c10, c10 - 0);
			fill (c10 - 100, c10, c10 - 0);
		}
 
 if (herramienta == 0) {
 ellipse(mouseX, mouseY, 30, 30);
		}
       if (herramienta == 1) {
beginShape();
  vertex(mouseX, mouseY);
  vertex(mouseX-15,mouseY+5);
  vertex (mouseX-10,mouseY+10);
  vertex(mouseX+10,mouseY+10);
  vertex(mouseX+15,mouseY+5);
  endShape(CLOSE);
  
  ellipse(mouseX, mouseY, 10, 10);
		}
  
      if (herramienta == 2) {
  rect(mouseX, mouseY, 10, 20);
  ellipse(mouseX+10, mouseY+20, 15,10);
		}
      
     if (herramienta == 3) {
  rect(mouseX, mouseY, 20,15);
  triangle(mouseX,mouseY,mouseX+30,mouseY,mouseX+15,mouseY-10);
		}
      
           if (herramienta == 4) {
  rect(mouseX, mouseY, 20,15);
  triangle(mouseX,mouseX,mouseX+30,mouseY,mouseX+15,mouseY-10);
		}
      
                 if (herramienta == 5) {
         ellipse(mouseX,mouseY, 20, 20);
  fill(255);
  ellipse(mouseX, mouseY, 10,10);
		}
                       if (herramienta == 6) {
  line(mouseX, mouseY, mouseX, mouseY+20);
  line(mouseX -10, mouseY+10, mouseX + 10, mouseY+10);
		}

      
      
}
  
  
  


  
  
}