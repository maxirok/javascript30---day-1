'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        
     
        
var keyA = document.querySelectorAll('[data-key="a"]');
var keyS = document.querySelectorAll('[data-key="s"]');
var keyD = document.querySelectorAll('[data-key="d"]');
var keyF = document.querySelectorAll('[data-key="f"]');
var keyG = document.querySelectorAll('[data-key="g"]');
var keyH = document.querySelectorAll('[data-key="h"]');
var keyJ = document.querySelectorAll('[data-key="j"]');
var keyK = document.querySelectorAll('[data-key="k"]');
var keyL = document.querySelectorAll('[data-key="l"]');
        
function keyDownSound(e) {
  var keyCode = e.keyCode;
    switch (keyCode) {
        case 65:
        keyA[0].classList.add('klick');
        keyA[1].play();
        break;
        case 83:
        keyS[0].classList.add('klick');
        keyS[1].play();
        break;
        case 68:
        keyD[0].classList.add('klick');
        keyD[1].play();
        break;
        case 70:
        keyF[0].classList.add('klick');
        keyF[1].play();
        break;
        case 71:
        keyG[0].classList.add('klick');
        keyG[1].play();
        break;
        case 72:
        keyH[0].classList.add('klick');
        keyH[1].play();
        break;
        case 74:
        keyJ[0].classList.add('klick');
        keyJ[1].play();
        break;
        case 75:
        keyK[0].classList.add('klick');
        keyK[1].play();
        break;
        case 76:
        keyL[0].classList.add('klick');
        keyL[1].play();
        break;
    }
    

};
        
function keyUpSound(e) {
  var keyCode = e.keyCode;
    switch (keyCode) {
        case 65:
        keyA[0].classList.remove('klick');
        break;
        case 83:
        keyS[0].classList.remove('klick');
        break;
        case 68:
        keyD[0].classList.remove('klick');
        break;
        case 70:
        keyF[0].classList.remove('klick');
        break;
        case 71:
        keyG[0].classList.remove('klick');
        break;
        case 72:
        keyH[0].classList.remove('klick');
        break;
        case 74:
        keyJ[0].classList.remove('klick');
        break;
        case 75:
        keyK[0].classList.remove('klick');
        break;
        case 76:
        keyL[0].classList.remove('klick');
        break;
    }
    

};


        
document.addEventListener("keydown", keyDownSound);
document.addEventListener("keyup", keyUpSound);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });