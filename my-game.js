function setup() {
  
createCanvas(400, 400);

}


function draw() {
  
background('orangered');
	
	
noStroke();
	
	
fill('orange');
	
ellipse(200, 200, 400, 400);
	
	
fill('gold');
	
quad(200, 100, 300, 200, 200, 300, 100, 200);
	
	
fill('white');
	
ellipse(200, 200, 130, 80);
	
	
fill('gray');
	
ellipse(200, 200, 50, 50);
	
	
fill('gold');
	
triangle(200, 100, 125, 200, 275, 200);

	
if (mouseIsPressed) {
	
fill('black');
	
ellipse(200, 200, 130, 80);
		
	
fill('gold');
	
ellipse(200, 196, 130, 80);
	
	
	
}
	
	
//fill('gray');
	//ellipse(200, 175, 200, 75);

}