
let canvas;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES)
    canvas.position(0, 0);
    canvas.style("z-index", "-2" );
    canvas.style("position", "fixed");
    background(0);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear();
    background(30);

    rotateX(60);
    rotateZ(0);

    noFill();
    stroke(255);


    for (var i = 0; i < 70; i++ ) {

        var r = map(sin(frameCount / 2), -1, 1, 100, 200);
        var g = map (i, 0, 50, 100, 200);
        var b = map(cos(frameCount), -1, 1, 200, 100);
    
        stroke(r, g, b);

        rotate(frameCount)


        beginShape()
         for (var j = 0; j < 360; j += 100) {
            var rad = i * 10;
            var x = rad * cos(j);
            var y = rad * sin(j);
            var z = sin(frameCount * 2 + i * 5) * 50;

            vertex(x, y, z)
         }
         endShape(CLOSE)
    }
    // strokeWeight(0);
    // fill(random(200, 255), random(200, 255), random(200, 255));
    // ellipse(mouseX, mouseY, 30, 30)
}