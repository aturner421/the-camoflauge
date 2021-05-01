let r, g, b;
	
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  r = random(240);
  g = random(240);
  b = random(240);
}

//The draw function happens over and over again
function draw() {
  background(r, g, b); //an RGB color for the canvas' background
  
  
  stroke(0, 0, 0) // an RGB color for the border
  fill(150, 150, 255,255); // an RGB color for the inside of the (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,50,50)

strokeWeight(5);
 stroke(0,0,0);
 fill(r, g, b, 255);
 ellipse(360, 200, 200, 200);
}


function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(240)
    g = random(240);
    b = random(240);
	}
}