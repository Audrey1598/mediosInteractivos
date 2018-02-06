var posX = 0;
var posY = 0;

function setup() { 
  createCanvas(176, 356);
  background(209, 199, 172);

  
     strokeWeight(3);
	stroke(255,255,255, 30);
  
  for (var numFila2 = 0; numFila2 < 2; numFila2++) {
		for (var num2 = 0; num2 < 2; num2++) {
			fill(0,0,0);
			rect(posX, posY, 28, 88);
			posX = posX + 30
		}
		
		posY = posY+90;
	 	posX = 0;
	}
 
 
   strokeWeight(1);
  stroke(87, 62, 48); 
	for (var numFila = 0; numFila < 6; numFila++) {
		for (var num = 0; num < 1; num++) {
			fill(87, 62, 48);
			rect(posX+58, posY-181, 60, 15);			
			posX = posX + 30;
		}	
		posY = posY+30;
	 	posX = 0;
	}
 
  strokeWeight(1);
  stroke(170, 72, 53); 
	for (var numFila = 0; numFila < 6; numFila++) {
		for (var num = 0; num < 1; num++) {
			fill(170, 72, 53);
      rect(posX+119, posY-361, 60, 15);			
			posX = posX + 30;
		}	
		posY = posY+30;
	 	posX = 0;
	}
 
  strokeWeight(1);
  stroke(170, 72, 53); 
	for (var numFila = 0; numFila < 6; numFila++) {
		for (var num = 0; num < 1; num++) {
			fill(170, 72, 53);
      rect(posX, posY -345, 60, 15);			
			posX = posX + 30;
		}	
		posY = posY+30;
	 	posX = 0;
	}
  
  
  fill(0,0,0);
  rect(59, 180, 59, 180);
  strokeWeight(1);
	stroke(209,199,172);
  
  for (var numFila2 = 0; numFila2 < 2; numFila2++) {
		for (var num2 = 0; num2 < 2; num2++) {
			fill(209,199,172);
      rect(posX+60, posY-544, 28, 88);
			posX = posX + 30
		}
		
		posY = posY+90;
	 	posX = 0;
	}

  strokeWeight(1);
  stroke(87, 62, 48); 
	for (var numFila = 0; numFila < 6; numFila++) {
		for (var num = 0; num < 1; num++) {
			fill(87, 62, 48);
      rect(posX+120, posY-706, 60, 15);			
			fill(87, 62, 48);
			posX = posX + 30;
		}	
		posY = posY+30;
	 	posX = 0;
	} 
 
  

	 
  
  
 
   
  
}