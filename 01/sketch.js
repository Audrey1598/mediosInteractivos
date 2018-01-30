function setup() { 
  createCanvas(700, 600); // tamaño canvas
  background(222, 213, 175); // color canvas
	
	strokeWeight(1); //linea vertical
	stroke(0, 0, 0);
	line(300, 500, 160, 0);
	
	strokeWeight(2);// linea horizontal 1
	stroke(0, 0, 0);
	line(460, 120, 0, 120);
	
	strokeWeight(2);//linea horizontal 2
	stroke(0, 0, 0);
	line(400, 250, 100, 250);
	
	strokeWeight(2);//linea horizontal 3
	stroke(0, 0, 0);
  line(440, 360, 170, 360);
	
	strokeWeight(4);//linea diagonal
	stroke(0, 0, 0);
  line(450, 320, 130, 10);
	
	strokeWeight(100);//circulo
	stroke(116, 95, 142, 200);
	point(230, 250);
	
  noStroke();//circulo verde
  fill(138, 150, 98, 200);
  ellipse(490, 310, 180, 180);
  
  
  noStroke();
	fill(210, 157, 69, 200);
  beginShape();
  vertex(460, 120);
  vertex(350, 260);
  vertex(510, 280);
  endShape(CLOSE);
  
  fill(116, 18, 25, 200);
  rect(550, 375, 50, 50);
	
  strokeWeight(1);
  stroke(0, 0, 0);
  line(575, 395, 610, 395);
  line(575, 400, 610, 400);
	
	
	
	
}