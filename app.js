'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        
     
        
var keyA = document.querySelector('[data-key="a"]');
var keyS = document.querySelector('[data-key="s"]');
var keyD = document.querySelector('[data-key="d"]');
var keyF = document.querySelector('[data-key="f"]');
var keyG = document.querySelector('[data-key="g"]');
var keyH = document.querySelector('[data-key="h"]');
var keyJ = document.querySelector('[data-key="j"]');
var keyK = document.querySelector('[data-key="k"]');
var keyL = document.querySelector('[data-key="l"]');
        
function keyDownSound(e) {
  var keyCode = e.keyCode;
    switch (keyCode) {
        case 65:
        keyA.classList.add('klick');
        break;
        case 83:
        keyS.classList.add('klick');
        break;
        case 68:
        keyD.classList.add('klick');
        break;
        case 70:
        keyF.classList.add('klick');
        break;
        case 71:
        keyG.classList.add('klick');
        break;
        case 72:
        keyH.classList.add('klick');
        break;
        case 74:
        keyJ.classList.add('klick');
        break;
        case 75:
        keyK.classList.add('klick');
        break;
        case 76:
        keyL.classList.add('klick');
        break;
    }
    

}

        
document.addEventListener("keydown", keyDownSound);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    });