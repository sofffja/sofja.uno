// SENO COSENO
const numLines = 50;

let t = 0;
let l;
let rojo;
let verde;
let azul;
let ancho;

// ORBITAS
// var orbitCenterX = 300;
// var orbitCenterY = 300;
var orbitRadiusX = 20;
var orbitRadiusY = 15;
var orbitAngle = 1;
var orbitSpeed = 0.07;

var orbitRadiusX2 = 35;
var orbitRadiusY2 = 29;
var orbitAngle2 = 1000;
var orbitSpeed2 = 0.03;

var orbitRadiusX3 = 57;
var orbitRadiusY3 = 53;
var orbitAngle3 = 50;
var orbitSpeed3 = 0.05;

var orbitRadiusX4 = 80;
var orbitRadiusY4 = 53;
var orbitAngle4 = 0;
var orbitSpeed4 = 0.01;

var orbitRadiusX5 = 120;
var orbitRadiusY5 = 111;
var orbitAngle5 = 180;
var orbitSpeed5 = 0.009;

// SOFT BODY
// Punto central
let centerX = 0.0, centerY = 0.0;

let radius = 2, rotAngle = -90;
let accelX = 0.0, accelY = 0.0;
let deltaX = 0.0, deltaY = 0.0;
let springing = 0.0005, damping = 0.97;

// nodos esquina
let nodes = 50;

// Arreglos vacíos
let nodeStartX = [];
let nodeStartY = [];
let nodeX = [];
let nodeY = [];
let angle = [];
let frequency = [];

// Dinámica de cuerpo blando
let organicConstant = 1.0;

// SIDE LINE
let k1 = 0;
let k2 = 0;
let k3 = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // centrar la figura en la ventana
    centerX = width / 2;
    centerY = height / 2;

    //inicializar arreglos a 0
    for (let i=0; i<nodes; i++){
        nodeStartX[i] = 0;
        nodeStartY[i] = 0;
        nodeY[i] = 0;
        nodeY[i] = 0;
        angle[i] = 0;
    }

    // inicializar freuencias de los nodos de esquina
    for (let i = 0; i < nodes; i++){
        frequency[i] = random(2, 20);
    }

    frameRate(30);
}
let suma1 = true;
let suma2 = true;
let suma3 = true;
 rojo = 170;
 verde = 100;
 azul = 150;

function draw() {
    //fondo semitransparente
    clear();
    fill(0, 0);

    // rojo = random(150, 150);
    // verde = random(50, 200);
    // azul = random(150, 200);

    if (verde == 50) {
        suma1 = true;
    } else if (verde == 200) {
        suma1 = false;
    }

    if (suma1) {
        verde++;
    }
    else if (!suma1) {
        verde--;
    }

    if (azul == 150) {
        suma2 = true;
    } else if (azul == 255) {
        suma2 = false;
    }

    if (suma2) {
        azul++;
    }
    else if (!suma2) {
        azul--;
    }

    if (rojo == 125) {
        suma3 = true;
    } else if (rojo == 170) {
        suma3 = false;
    }

    if (suma3) {
        rojo++;
    }
    else if (!suma3) {
        rojo--;
    }



    strokeWeight(0.7);
    
    drawSoftBody();
    moveSoftBody();
    // drawCursor();
    drawOrbits();
    drawSenoCoseno();
    drawSideLine();
}

function drawSideLine() {
    stroke(rojo + 85, verde + 85, azul + 85);
    strokeWeight(0.3);

    let xLine1 = windowWidth*0.085 + 48/3;
    let xLine2 = xLine1 + 10;
    let yLine1 = 0;
    let yLine2 = 235;
    let yLine3 = 255;
    let yLine4 = windowHeight;

    line(xLine1, yLine1, xLine1, yLine2);
    line(xLine1, yLine2, xLine2, yLine3);
    line(xLine2, yLine3, xLine2, yLine4);

    
}

function drawCursor() {
    noFill();
    stroke(0);
    line((mouseX - 10), (mouseY), (mouseX + 10), (mouseY));
    line((mouseX), (mouseY - 10), (mouseX), (mouseY + 10));
    // circle(mouseX, mouseY, 10); 
}

function drawOrbits() {
    fill(rojo + 55, verde + 55, azul + 55, 200);
    noStroke();
    var orbitX = (mouseX - 6) + orbitRadiusX * cos(orbitAngle);
    var orbitY = mouseY + orbitRadiusY * sin(orbitAngle);
    orbitAngle += orbitSpeed;

    var orbitX2 = (mouseX + 3) + orbitRadiusX2 * cos(orbitAngle2);
    var orbitY2 = (mouseY - 7) + orbitRadiusY2 * sin(orbitAngle2);
    orbitAngle2 += orbitSpeed2;

    var orbitX3 = (mouseX - 15) + orbitRadiusX3 * cos(orbitAngle3);
    var orbitY3 = mouseY + orbitRadiusY3 * sin(orbitAngle3);
    orbitAngle3 += orbitSpeed3;

    var orbitX4 = (mouseX + 5) + orbitRadiusX4 * cos(orbitAngle4);
    var orbitY4 = (mouseY - 10) + orbitRadiusY4 * sin(orbitAngle4);
    orbitAngle4 += orbitSpeed4;

    var orbitX5 = (mouseX - 15) + orbitRadiusX5 * cos(orbitAngle5);
    var orbitY5 = mouseY + orbitRadiusY5 * sin(orbitAngle5);
    orbitAngle5 += orbitSpeed5;

    ellipse(orbitX, orbitY, 4, 4);
    ellipse(orbitX2, orbitY2, 3, 3);
    ellipse(orbitX3, orbitY3, 6, 6);
    ellipse(orbitX4, orbitY4, 2, 2);
    // ellipse(orbitX5, orbitY5, 4, 4);

    noFill();
    stroke(255, 20);
    ellipse(mouseX - 6, mouseY, orbitRadiusX*2, orbitRadiusY*2);
    ellipse(mouseX + 3, mouseY - 7, orbitRadiusX2*2, orbitRadiusY2*2);
    ellipse(mouseX - 15, mouseY, orbitRadiusX3*2, orbitRadiusY3*2);
    ellipse(mouseX + 5, mouseY - 10, orbitRadiusX4*2, orbitRadiusY4*2);
    // ellipse(mouseX - 15, mouseY, orbitRadiusX5*2, orbitRadiusY5*2);
}

function drawSoftBody() {
    noStroke();

    //  calcular posiciones iniciales de nodos
    for (let i = 0; i < nodes; i++){
        nodeStartX[i] = centerX + cos(radians(rotAngle)) * radius;
        nodeStartY[i] = centerY + sin(radians(rotAngle)) * radius;
        rotAngle += 360.0 / nodes;
    }

    // dibujar polígono
    curveTightness(organicConstant);
    fill(0);
    beginShape();
    for (let i = 0; i < nodes; i++){
        curveVertex(nodeX[i], nodeY[i]);
    }
    for (let i = 0; i < nodes-1; i++){
        curveVertex(nodeX[i], nodeY[i]);
    }
    endShape(CLOSE);

}

function moveSoftBody() {
    // mover punto central
    deltaX = (mouseX + 33)-centerX;
    deltaY = (mouseY + 47)-centerY;

    // crear efecto resorte
    deltaX *= springing;
    deltaY *= springing;
    accelX += deltaX;
    accelY += deltaY;

    // mover el centro del depredador
    centerX += accelX;
    centerY += accelY;

    // reducir velocidad del efecto resorte
    accelX *= damping;
    accelY *= damping;

    // Cambiar tirantez de la curva
    organicConstant = 1 - ((abs(accelX) + abs(accelY)) * 0.9);

    //mover nodos
    for (let i = 0; i < nodes; i++){
        nodeX[i] = nodeStartX[i] + sin(radians(angle[i])) * (accelX * 2);
        nodeY[i] = nodeStartY[i] + sin(radians(angle[i])) * (accelY * 2);
        angle[i] += frequency[i];
    }
}

function drawSenoCoseno() {
    stroke(rojo, verde, azul, 50);  

    for (let i = 0; i < numLines; i++) {
        line(x1(t+i), y1(t+i), x2(t+i), y2(t+i));
    }
    t++;
}

function x1(t) {
    return sin(t/12) * 25 + sin(t/200) * 20 + (windowWidth - 78);
}
function y1(t) {
    return sin(t/17) * 5 + 27;
}
function x2(t) {
    return cos(t/21) * 55 + (windowWidth - 78);
}
function y2(t) {
    return sin(t/33) * 10 + 27;
}

// function x1(t) {
//     return sin(t/90) * 50 + sin(t/200) * 90 + (windowWidth - 100);
// }
// function y1(t) {
//     return sin(t/80) * 70 + 10;
// }
// function x2(t) {
//     return sin(t/90) * 10 + (windowWidth - 100);
// }
// function y2(t) {
//     return sin(t/100) * 20 + sin(t/20) * 40 + 10;
// }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function linedash(x1, y1, x2, y2, delta, style = '-') {
    // delta is both the length of a dash, the distance between 2 dots/dashes, and the diameter of a round
    let distance = dist(x1,y1,x2,y2);
    let dashNumber = distance/delta;
    let xDelta = (x2-x1)/dashNumber;
    let yDelta = (y2-y1)/dashNumber;
  
    for (let i = 0; i < dashNumber; i+= 2) {
      let xi1 = i*xDelta + x1;
      let yi1 = i*yDelta + y1;
      let xi2 = (i+1)*xDelta + x1;
      let yi2 = (i+1)*yDelta + y1;
  
      if (style == '-') { line(xi1, yi1, xi2, yi2); }
      else if (style == '.') { point(xi1, yi1); }
      else if (style == 'o') { ellipse(xi1, yi1, delta/2); }
    }
  }