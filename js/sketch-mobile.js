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

function draw() {
    //fondo semitransparente
    clear();
    fill(0, 0);

    rojo = random(200, 150);
    verde = random(100, 200);
    azul = random(200, 200);

    strokeWeight(0.7);
    
    drawOrbits();
    drawSenoCoseno();
    drawSideLine();
}

function drawSideLine() {
    stroke(rojo + 85, verde + 85, azul + 85);
    strokeWeight(0.3);


    let xLine1 = 10;
    let xLine2 = xLine1 + 5;
    let yLine1 = 0;
    // let yLine2 = windowHeight - windowHeight/1.25;
    // let yLine3 = windowHeight - windowHeight/1.3;
    let yLine2 = 235;
    let yLine3 = 255;
    let yLine4 = windowHeight;

    line(xLine1, yLine1, xLine1, yLine2);
    line(xLine1, yLine2, xLine2, yLine3);
    line(xLine2, yLine3, xLine2, yLine4);

    
}


function drawOrbits() {
    fill(rojo + 55, verde + 55, azul + 55, 200);
    noStroke();
    var orbitX = 30 + orbitRadiusX * cos(orbitAngle);
    var orbitY = 30 + orbitRadiusY * sin(orbitAngle);
    orbitAngle += orbitSpeed;

    var orbitX2 = 30 + orbitRadiusX2 * cos(orbitAngle2);
    var orbitY2 = 30 + orbitRadiusY2 * sin(orbitAngle2);
    orbitAngle2 += orbitSpeed2;

    var orbitX3 = 30 + orbitRadiusX3 * cos(orbitAngle3);
    var orbitY3 = 30 + orbitRadiusY3 * sin(orbitAngle3);
    orbitAngle3 += orbitSpeed3;

    var orbitX4 = 30 + orbitRadiusX4 * cos(orbitAngle4);
    var orbitY4 = 30 + orbitRadiusY4 * sin(orbitAngle4);
    orbitAngle4 += orbitSpeed4;

    ellipse(orbitX, orbitY, 4, 4);
    ellipse(orbitX2, orbitY2, 3, 3);
    ellipse(orbitX3, orbitY3, 6, 6);
    ellipse(orbitX4, orbitY4, 2, 2);

    noFill();
    stroke(255, 30);
    ellipse(30, 30, orbitRadiusX*2, orbitRadiusY*2);
    ellipse(30, 30, orbitRadiusX2*2, orbitRadiusY2*2);
    ellipse(30, 30, orbitRadiusX3*2, orbitRadiusY3*2);
    ellipse(30, 30, orbitRadiusX4*2, orbitRadiusY4*2);

}

function drawSenoCoseno() {
    stroke(rojo, verde, azul, 50);  

    for (let i = 0; i < numLines; i++) {
        line(x1(t+i), y1(t+i), x2(t+i), y2(t+i));
    }
    t++;
}

function x1(t) {
    return sin(t/12) * 25 + sin(t/200) * 20 + (windowWidth - 67);
}
function y1(t) {
    return sin(t/17) * 5 + 27;
}
function x2(t) {
    return cos(t/21) * 55 + (windowWidth - 67);
}
function y2(t) {
    return sin(t/33) * 10 + 27;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
