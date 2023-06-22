// p5
const numLines = 50;

let t = 0;
let l;
let rojo = 30;
let verde = 30;
let azul = 30;
let ancho;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // centrar la figura en la ventana
    centerX = width / 2;
    centerY = height / 2;

    frameRate(30);
}
function draw() {
    clear();
    fill(0, 0);
    drawSenoCoseno();
}

function drawSenoCoseno() {
    stroke(rojo, verde, azul, 50);  

    for (let i = 0; i < numLines; i++) {
        line(x1(t+i), y1(t+i), x2(t+i), y2(t+i));
    }
    t++;
}

function x1(t) {
    return sin(t/12) * 25 + sin(t/200) * 10 + (windowWidth/2);
}
function y1(t) {
    return sin(t/17) * 5 + 150;
}
function x2(t) {
    return cos(t/21) * 65 + (windowWidth/2);
}
function y2(t) {
    return sin(t/33) * 20 + 150;
}

//
let entrar = document.getElementById('enter');

entrar.addEventListener('click', e => {
    document.getElementById('welcome').style.opacity = '0';
    document.body.style.cssText = "--dark:  rgb(0, 0, 0);--light: rgb(0, 0, 0);--gray1:  rgb(0, 0, 0);--hover: rgb(0, 0, 0);--links: rgb(0, 0, 0);--color: rgb(0, 0, 0);";
    setTimeout(function(){ 
        window.location.href = '../main.html';
    }, 2000);    
})