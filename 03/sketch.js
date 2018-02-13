var TamC1=200;
var TamC2=200;
var TamC3=100;
var TamC4=100;
var TamC5=50;
var dir=1;
var DirC= 1;
var Co1= 82;
var Co2= 194;
var Co3=55;
var Co4= 220;
var Co5= 12;
var Co6= 60;
var dir2= 1;
var CP=0;
var D3= 1;
var posL1= 730;
var posL2= 800;
var dirL1= 1;
var dirL2= 1;


function setup() { 
  createCanvas(1000, 1000);
}
function draw (){
	background(0);
  fill(247, 43, 219);
	noStroke();
	ellipse (370, 400, TamC1, TamC1);
  
  TamC1=TamC1+10*dir;
  if(TamC1>300||TamC1 <100){
    dir=dir*-1;
	}
	fill(51, 241, 251);
	noStroke();
	ellipse(700,400, TamC2, TamC2);
  
    TamC2=TamC2+15*dir;
  if(TamC2>300||TamC2 <100){
    dir=dir*-1;
	}
  
  fill(Co1, Co2, Co3);
  noStroke();
  ellipse(370, 400, TamC3, TamC3);
  
  Co1= Co1+12*DirC;
  Co2= Co2+2.7*DirC;
  Co3= Co3+ 2.6*DirC;
  
  
    TamC3=TamC3+15*dir;
  if(TamC3>200||TamC3 <50){
    dir2=dir2*-1;
  }
  
  fill(Co4, Co5, Co6);
  noStroke();
  ellipse(700, 400, TamC4, TamC4);
  
  Co4= Co4+2.25*DirC;
  Co5= Co5+2.5*DirC;
  Co6= Co6+ 13.25*DirC;
  
   if(Co1>226||Co1<82){
    DirC=DirC*-1;
  }   
	
  fill(CP, CP, CP);
  noStroke();
  ellipse(700, 400, TamC5, TamC5);

  CP=CP+5*D3;
  
  if(CP>255||CP<0){
    D3=D3*-1;
  }
  
 strokeWeight(10); 
 stroke(238, 143, 248); 
 line(300, posL1, 800, posL1);
  
   posL1=posL1+10*dirL1;
  if(posL1>730||posL1 <655){
    dirL1=dirL1*-1;
	}
  
 strokeWeight(20);
  stroke(129, 233, 213);
  line(300, posL2, 800, posL2);
  
    posL2=posL2+10*dirL2;
  if(posL2>800||posL2 <715){
    dirL2=dirL2*-1;
	} 

    //if(frameCount<70){
  //saveCanvas ("miFlipbook" + frameCount, 'jpg');
//}


}


