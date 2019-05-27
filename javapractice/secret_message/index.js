let paragraf=null;
let viditelnost=0;
let neviditelnost=0;


const opacity1=()=>{
    console.log("nacteni opacity1");
    paragraf = document.querySelector('.text_vnitrek');
    paragraf.style.opacity=1;}

const opacity0=()=>{
    console.log("nacteni opacity0");
    paragraf = document.querySelector('.text_vnitrek');
    paragraf.style.opacity=0;}


const zviditelneni = () => {
    console.log("nacteni zviditelneni");
    viditelnost = document.querySelector('.obrazek');
    viditelnost.addEventListener('mouseenter',opacity1); 
}


const zneviditelneni = () => {
    console.log("nacteni zneviditelneni");
    neviditelnost = document.querySelector('.obrazek');
    neviditelnost.addEventListener('mouseleave',opacity0);
}

const inicializace = () => {
    console.log("ahoj");
    zviditelneni();
    zneviditelneni()
}

document.addEventListener('DOMContentLoaded', inicializace);
  
 