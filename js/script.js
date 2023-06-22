//CARGAR PRIMER CONTENIDO

//SELECT JS
if (screen && screen.width > 700) {
    document.write('<script type="text/javascript" src="js/sketch.js"></script>');
    
    let newHash;
    let $mainContent = $("#contenido");
    newHash = 'works.html';
        $mainContent
                    .find("#guts")
                    .fadeOut(200, function() {
                        $mainContent.hide().load(newHash + " #guts", function() {
                            $mainContent.fadeIn(500, function() {
    
                            });
                            
                            $("nav a").removeClass("current");
                            $("nav a[href="+newHash+"]").addClass("current");
                        });
                    });
}
if (screen && screen.width <= 700) {
    document.write('<script type="text/javascript" src="js/sketch-mobile.js"></script>');
}

var rellax = new Rellax('.rellax');


//CAMBIOS DE COLOR
let html = document.getElementById('html');
let invert = document.querySelector('#invert');
let hue1 = document.querySelector('#hue1');
let hue2 = document.querySelector('#hue2');
let reset = document.querySelector('#reset');

let filterList = {
    invert: 0,
    grayscale: 0,
    hue: 0
}

addClick();

//FILTROS
function addClick() {
    invert.addEventListener('click', function() {
        if (filterList.invert == 0) {
            filterList.invert = 100;
            setStyle();
            invert.style.color = 'var(--hover)';
        } else {
            filterList.invert = 0;
            setStyle();
            invert.style.color = 'var(--links)';
        }  
    });
    hue1.addEventListener('click', function() {
        if (filterList.hue != 190) {
            filterList.hue = 190;
            setStyle();
            hue1.style.color = 'var(--hover)';
            hue2.style.color = 'var(--links)';
        } else {
            filterList.hue = 0;
            setStyle();
            hue1.style.color = 'var(--links)';
        }  
    });
    hue2.addEventListener('click', function() {
        if (filterList.hue != 270) {
            filterList.hue = 270;
            setStyle();
            hue2.style.color = 'var(--hover)';
            hue1.style.color = 'var(--links)';
        } else {
            filterList.hue = 0;
            setStyle();
            hue2.style.color = 'var(--links)';
        }  
    });
    reset.addEventListener('click', function() {
        filterList.hue = 0;
        filterList.invert = 0;
        setStyle();
        invert.style.color = 'var(--links)';
        hue1.style.color = 'var(--links)';
        hue2.style.color = 'var(--links)';
    });
}

function setStyle() {
    html.style.cssText = "filter: hue-rotate(" + filterList.hue + "deg) invert(" + filterList.invert + "%) grayscale(" + filterList.grayscale + "%)";
}

//COLOR DOCUMENTO
let root = document.body;
let color1 = document.getElementById('change-color1');
let color2 = document.getElementById('change-color2');
let color3 = document.getElementById('change-color3');
let color4 = document.getElementById('change-color4');
let color5 = document.getElementById('change-color5');
let color6 = document.getElementById('change-color6');

color1.addEventListener("click", e => {
    root.style.cssText = "--dark:  rgb(55, 0, 87);--light: rgb(0, 255, 85);--gray1:  rgb(170, 131, 192);--hover: rgb(238, 255, 0);--links: rgb(255, 255, 255);--color: rgb(17, 0, 255);"
    
    color1.style.color = 'var(--hover)';
    
    color2.style.color = 'var(--links)';
    color3.style.color = 'var(--links)';
    color4.style.color = 'var(--links)';
    color5.style.color = 'var(--links)';
    color6.style.color = 'var(--links)';
});
color2.addEventListener("click", e => {
    root.style.cssText = "--dark:  rgb(0, 0, 0);--light: rgb(255, 0, 0);--gray1:  rgb(29, 29, 29);--hover: rgb(255, 255, 255);--links: rgb(133, 133, 133);--color: rgb(255, 255, 255);"

    color2.style.color = 'var(--hover)';

    color1.style.color = 'var(--links)';
    color3.style.color = 'var(--links)';
    color4.style.color = 'var(--links)';
    color5.style.color = 'var(--links)';
    color6.style.color = 'var(--links)';
});
color3.addEventListener("click", e => {
    root.style.cssText = "--dark:  rgb(0, 17, 255);--light: rgb(255, 255, 255);--gray1:  rgb(114, 103, 177);--hover: rgb(255, 251, 0);--links: rgb(0, 0, 0);--color: rgb(255, 255, 255);"

    color3.style.color = 'var(--hover)';

    color1.style.color = 'var(--links)';
    color2.style.color = 'var(--links)';
    color4.style.color = 'var(--links)';
    color5.style.color = 'var(--links)';
    color6.style.color = 'var(--links)';
});  
color4.addEventListener("click", e => {
    root.style.cssText = "--dark:  rgb(87, 87, 87);--light: rgb(162, 185, 187);--gray1:  rgb(255, 0, 0);--hover: rgb(0, 247, 255);--links: rgb(0, 0, 0);--color: rgb(255, 255, 255);"

    color4.style.color = 'var(--hover)';

    color1.style.color = 'var(--links)';
    color2.style.color = 'var(--links)';
    color3.style.color = 'var(--links)';
    color5.style.color = 'var(--links)';
    color6.style.color = 'var(--links)';
});
color5.addEventListener("click", e => {
    root.style.cssText = "--dark:  rgb(0, 0, 0);--light: rgb(134, 134, 134);--gray1:  rgb(0, 0, 0);--hover: rgb(255, 255, 255);--links: rgb(72, 255, 0);--color: rgb(255, 255, 255);"

    color5.style.color = 'var(--hover)';

    color1.style.color = 'var(--links)';
    color2.style.color = 'var(--links)';
    color3.style.color = 'var(--links)';
    color4.style.color = 'var(--links)';
    color6.style.color = 'var(--links)';
});
color6.addEventListener("click", e => {
    root.style.cssText = "--dark:  rgb(54, 54, 54);--gray1: rgba(101,101,101,1);--light:  rgba(204,204,204,1);--hover: rgb(187, 255, 0);--links: white;--color: rgb(228, 172, 191);"

    color6.style.color = 'var(--hover)';

    color1.style.color = 'var(--links)';
    color2.style.color = 'var(--links)';
    color3.style.color = 'var(--links)';
    color4.style.color = 'var(--links)';
    color5.style.color = 'var(--links)';
});